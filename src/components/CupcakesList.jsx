import React, { useState, useEffect } from 'react'
import api from '../api'
import Cupcake from './Cupcake'
import Sort from './Sort'
import Categories from './common/Categories'
import Pagination from './common/Pagination'
import { paginate } from '../utils/paginate'
import _ from 'lodash'

import '../scss/components/_cupcake-block.scss'
import '../scss/app.scss'

const CupcakesList = () => {
  const [cupcakes, setCupcakes] = useState(api.cupcakes.fetchAll())
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
  const [categories, setCategories] = useState()
  const [selectedCategories, setSelectedCategories] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(data))
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategories])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleCategoriesSelect = (item) => {
    setSelectedCategories(item)
  }
  const handleSort = (item) => {
    setSortBy(item)
  }

  const pageSize = 6
  const filteredCupcakes = selectedCategories
    ? cupcakes.filter(
        (cupcake) =>
          JSON.stringify(cupcake.category) ===
          JSON.stringify(selectedCategories)
      )
    : cupcakes
  const count = filteredCupcakes.length
  const sortedCupcakes = _.orderBy(
    filteredCupcakes,
    [sortBy.path],
    [sortBy.order]
  )
  const cupcakeCrop = paginate(sortedCupcakes, currentPage, pageSize)

  const clearFilter = () => {
    setSelectedCategories()
  }

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
      {cupcakes && <Cupcake cupcakes={cupcakes} cupcakeCrop={cupcakeCrop} />}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  )
}

export default CupcakesList
