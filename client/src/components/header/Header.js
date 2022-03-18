import React, { useState } from 'react'

import styles from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

const Header = () => {
  const [expanded, setExpanded] = useState(false)
  const [userSubmenuOpened, setUserSubmenuOpened] = useState(false)

  const openMenu = () => {
    setExpanded(!expanded)
  }

  const openUserSubmenu = () => {
    setUserSubmenuOpened(!userSubmenuOpened)
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
          <div
            className={`${styles.user} ${userSubmenuOpened && styles.opened}`}
          >
            <div>
              <img
                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='Profile'
              />
              <div className={styles.user_details}>
                <span>Hi there,</span>
                <span className={styles.user_details__name}>John Doe</span>
              </div>
              <ExpandMoreIcon
                className={`${styles.icon} ${styles.open_submenu}`}
                onClick={openUserSubmenu}
              />
            </div>
            <div
              className={`${styles.user_submenu} ${
                userSubmenuOpened && styles.opened
              }`}
            >
              <ul>
                <li>
                  <a href=''>
                    <ManageAccountsIcon className={styles.icon} />
                    <span>Account</span>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <SettingsIcon className={styles.icon} />
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <LogoutIcon className={styles.icon} />
                    <span>Log out</span>
                  </a>
                </li>
              </ul>
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
