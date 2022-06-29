import React from 'react'
import '../../scss/components/_categories.scss'

const Categories = ({
  items,
  selectedItem,
  onItemSelect,
  valueProperty,
  contentProperty,
}) => {
  return (
    <ul>
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={items[item] === selectedItem ? 'active' : ''}
          onClick={() => onItemSelect(items[item])}
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  )
}

Categories.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name',
}

export default Categories
