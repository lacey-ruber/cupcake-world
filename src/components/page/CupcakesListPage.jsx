import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import api from '../../api'
import CupcakeCard from '../ui/CupcakeCard'
import Sort from '../common/Sort'
import Categories from '../common/Categories'
import Pagination from '../common/Pagination'
import { paginate } from '../../utils/paginate'
import '../../scss/components/_cupcake-block.scss'
import '../../scss/app.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  setSortBy,
  setSelectedCategories,
  setCurrentPage,
} from '../../store/slices/filterSlice'

const CupcakesListPage = () => {
  const dispatch = useDispatch()
  const { sortBy, selectedCategories, currentPage } = useSelector(
    (state) => state.filter
  )

  const [cupcakes, setCupcakes] = useState()
  const [categories, setCategories] = useState()

  useEffect(() => {
    api.cupcakes.fetchAll().then((data) => setCupcakes(data))
  }, [])

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategories])

  const handlePageChange = (pageIndex) => {
    dispatch(setCurrentPage(pageIndex))
  }
  const handleCategoriesSelect = (item) => {
    dispatch(setSelectedCategories(item))
  }
  const handleSort = (item) => {
    dispatch(setSortBy(item))
  }

  const pageSize = 6
  const filteredCupcakes = selectedCategories
    ? cupcakes.filter(
        (cupcake) =>
          JSON.stringify(cupcake.category) ===
          JSON.stringify(selectedCategories)
      )
    : cupcakes
  const count = cupcakes ? filteredCupcakes.length : undefined
  const sortedCupcakes = _.orderBy(
    filteredCupcakes,
    [sortBy.path],
    [sortBy.order]
  )
  const cupcakeCrop = paginate(sortedCupcakes, currentPage, pageSize)

  const clearFilter = () => {
    dispatch(setSelectedCategories())
  }

  if (cupcakes) {
    return (
      <section className='goods'>
        <Sort onSort={handleSort} selectedSort={sortBy} />
        <div className='categories'>
          <div className='categories__wrapper'>
            {categories && (
              <>
                <button className='categories__btn-clear' onClick={clearFilter}>
                  Все
                </button>
                <Categories
                  items={categories}
                  onItemSelect={handleCategoriesSelect}
                  selectedItem={selectedCategories}
                />
              </>
            )}
          </div>
        </div>
        {cupcakes && <CupcakeCard cupcakeCrop={cupcakeCrop} />}
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    )
  } else {
    return <h2>Загрузка</h2>
  }
}

export default CupcakesListPage
