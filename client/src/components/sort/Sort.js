import React, { useState } from 'react'
import styles from './Sort.module.css'

const sortOptions = [
  { default: 'Default sorting' },
  { price_asc: 'Price ascending' },
  { price_desc: 'Price descending' },
  { name_asc: 'Name ascending' },
  { name_desc: 'Name descending' },
]

const Sort = ({ setSortOption }) => {
  const [sortMethod, setSortMethod] = useState('default')

  const onSortOptionChange = (option) => {
    setSortMethod(option)
    setSortOption(option)
  }

  return (
    <select
      className={styles.sort}
      onChange={(e) => onSortOptionChange(e.target.value)}
      value={sortMethod}
    >
      {sortOptions.map((option, i) => (
        <option key={i} value={Object.keys(option)}>
          {Object.values(option)}
        </option>
      ))}
    </select>
  )
}

export default Sort
