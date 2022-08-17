import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import api from '../../api'
import CupcakeCard from '../ui/CupcakeCard'
import Sort from '../common/Sort'
import Categories from '../common/Categories'
import Pagination from '../common/Pagination'
import Search from '../common/Search'
import { paginate } from '../../utils/paginate'
import '../../scss/components/_header.scss'
import '../../scss/app.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  setSearchQuery,
  setSortBy,
  setSelectedCategories,
  setCurrentPage,
} from '../../store/slices/filterSlice'

const CupcakesListPage = () => {
  const dispatch = useDispatch()

  const [cupcakes, setCupcakes] = useState()
  const [categories, setCategories] = useState()
  const { searchQuery, sortBy, selectedCategories, currentPage } = useSelector(
    (state) => state.filter
  )
  const pageSize = 6

  useEffect(() => {
    api.cupcakes.fetchAll().then((data) => setCupcakes(data))
  }, [])

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(data))
  }, [])

  useEffect(() => {
    dispatch(setCurrentPage(1))
  }, [selectedCategories, searchQuery])

  const handleSearchQuery = ({ target }) => {
    dispatch(setSelectedCategories(undefined))
    dispatch(setSearchQuery(target.value))
  }
  const handlePageChange = (pageIndex) => {
    dispatch(setCurrentPage(pageIndex))
  }
  const handleCategoriesSelect = (item) => {
    if (searchQuery !== '') dispatch(setSearchQuery(''))
    dispatch(setSelectedCategories(item))
  }
  const handleSort = (item) => {
    dispatch(setSortBy(item))
  }

  if (cupcakes) {
    const filteredCupcakes = searchQuery
      ? cupcakes.filter(
          (cupcake) =>
            cupcake.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
            -1
        )
      : selectedCategories
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
      if (searchQuery !== '') dispatch(setSearchQuery(''))
      dispatch(setSelectedCategories())
    }

    return (
      <section className='goods'>
        <Search onSearch={handleSearchQuery} value={searchQuery} />
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
        <div className='goods__wrapper'>
          {cupcakeCrop && cupcakeCrop.map((cupcake) => (
            <CupcakeCard
              key={cupcake._id}
              id={cupcake._id}
              title={cupcake.title}
              price={cupcake.price}
              image={cupcake.icon}
            />
          ))}
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    )
  }
  return <h2>Загрузка...</h2>
}

CupcakesListPage.propTypes = {
  cupcakes: PropTypes.array,
}

export default CupcakesListPage
