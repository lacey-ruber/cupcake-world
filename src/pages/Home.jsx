import React, { useEffect, useState } from 'react'
import api from '../api'
import CupcakeBlock from '../components/CupcakeBlock'
import Pagination from '../components/common/Pagination'
import { paginate } from '../utils/paginate'
import Categories from '../components/common/Categories'
import '../scss/components/_cupcake-block.scss'
import '../scss/app.scss'

const Home = () => {
  const [cupcakes, setCupcakes] = useState(api.cupcakes.fetchAll())
  const [categories, setCategories] = useState()
  const [selectedCategories, setSelectedCategories] = useState()

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(data))
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategories])
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleCategoriesSelect = (item) => {
    setSelectedCategories(item)
  }

  const pageSize = 3
  const filteredCupcakes = selectedCategories
    ? cupcakes.filter((cupcake) => cupcake.category === selectedCategories)
    : cupcakes
  const count = filteredCupcakes.length
  const cupcakeCrop = paginate(filteredCupcakes, currentPage, pageSize)

  const clearFilter = () => {
    setSelectedCategories()
  }

  return (
    <section className='goods'>
      {/* <Sort selectedSort={sortBy} onSort={handleSort} /> */}
      <div className='categories'>
        <div className='categories__wrapper wrapper'>
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
      {cupcakes && (
        <CupcakeBlock cupcakes={cupcakes} cupcakeCrop={cupcakeCrop} />
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  )
}

export default Home
