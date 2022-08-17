import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import '../../scss/components/_filters.scss'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)
  if (pageCount === 1) {
    return null
  }

  return (
    <div className='pagination'>
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
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination
