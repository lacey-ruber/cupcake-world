import React from 'react'
import _ from 'lodash'

import '../../scss/components/_pagination.scss'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)
  if (pageCount === 1) {
    return null
  }

  return (
    <div className='pagination'>
      <div className='wrapper'>
        <ul>
          {pages.map((page) => (
            <li
              className={page === currentPage ? 'active' : null}
              key={'page_' + page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Pagination