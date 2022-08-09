import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/components/_categories.scss'

const Categories = ({
  items,
  selectedItem,
  onItemSelect,
  valueProperty,
  contentProperty,
}) => {
  if (!Array.isArray(items)) {
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
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={item === selectedItem ? 'active' : ''}
          onClick={() => onItemSelect(item)}
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  )
}

Categories.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name',
}

Categories.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  selectedItem: PropTypes.object,
  onItemSelect: PropTypes.func,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
}

export default Categories
