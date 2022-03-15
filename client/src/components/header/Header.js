import React from 'react'

import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.logo}>
          rental<span>.</span>io
        </div>
        <div className={styles.search}>
          <div>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search...'
            />
            <SearchIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.user_details}>
          <div>
            <img
              src='https://t4.ftcdn.net/jpg/03/20/77/17/360_F_320771732_mxVhb6K1K51cM9x5unAsLWwahDCj7s0j.jpg'
              alt='Profile'
            />
            <div>Name</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
