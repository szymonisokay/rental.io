import React from 'react'

import styles from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.logo}>
          rental<span>.io</span>
        </div>
        <div className={styles.navigation}>
          <nav>
            <ul>
              <li>
                <a href='#'></a>
              </li>
            </ul>
          </nav>
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
      </div>
    </header>
  )
}

export default Header
