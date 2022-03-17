import React, { useState } from 'react'

import styles from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const openMenu = () => {
    setExpanded(!expanded)
  }

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.logo}>
          rental<span>.io</span>
        </div>
        <div className={`${styles.navigation} ${expanded && styles.expanded} `}>
          <nav>
            <ul>
              <li>
                <a href='#'>search</a>
              </li>
              <li>
                <a href='#'>offers</a>
              </li>
            </ul>
          </nav>
          <div className={styles.user}>
            <div>
              <img
                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='Profile'
              />
              <div className={styles.user_details}>
                <span>Hi there,</span>
                <span className={styles.user_details__name}>John Doe</span>
              </div>
              <ExpandMoreIcon className={styles.icon} />
            </div>
          </div>
          {!expanded && (
            <MenuIcon
              className={`${styles.icon} ${styles.open_menu}`}
              onClick={openMenu}
            />
          )}
          {expanded && <CloseIcon className={styles.icon} onClick={openMenu} />}
        </div>
      </div>
    </header>
  )
}

export default Header
