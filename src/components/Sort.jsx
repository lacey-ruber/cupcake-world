import React from 'react'

import '../scss/components/_sort.scss'

const Sort = ({ onSort, selectedSort }) => {
  const items = [
    { name: 'Популярности', sortProperty: 'rating' },
    { name: 'Цене', sortProperty: 'price' },
    { name: 'Алфавиту', sortProperty: 'title' },
  ]
  const handleSort = (item) => {
    if (selectedSort.iter === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc',
      })
    } else {
      onSort({ iter: item, order: 'asc' })
    }
  }
  const renderSortArrow = (selectedSort, currentPath) => {
    if (selectedSort.iter === currentPath) {
      if (selectedSort.order === 'asc') {
        return <span>↑</span>
      } else {
        return <span>↓</span>
      }
    }
  }
  return (
    <div className='sort'>
      <div className='wrapper'>
        <div className='sort__label'>
          <b>Сортировать по:</b>
          {items.map((item, id) => (
            <span
              key={id}
              onClick={() => handleSort(item.sortProperty)}
              className={item.name === onSort.iter ? 'active' : ''}
            >
              {item.name}
            </span>
          ))}{' '}
          {renderSortArrow(selectedSort, onSort.order)}
        </div>
      </div>
    </div>
  )
}

export default Sort
