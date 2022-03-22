import React, { useState } from 'react'
import styles from './Filters.module.css'

import CloseIcon from '@mui/icons-material/Close'

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false)

  const applyFilters = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className={styles.filter_btn} onClick={() => setIsOpen(true)}>
        Filters
      </button>
      <aside className={`${styles.filters_box} ${isOpen && styles.opened}`}>
        <CloseIcon className={styles.close} onClick={() => setIsOpen(false)} />

        <h2>Filter listings</h2>
        <div className={styles.filter_actions}>
          <button className={styles.clear}>Clear filters</button>
          <button className={styles.apply} onClick={applyFilters}>
            Apply filters
          </button>
        </div>
      </aside>
    </>
  )
}

export default Filters
