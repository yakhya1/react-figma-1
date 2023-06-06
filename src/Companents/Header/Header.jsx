import React from 'react'
import LogoHeader from './LogoHeader'
import MenuHeader from './MenuHeader'
import styles from './Header.module.css'

function Header() {
  return (
    <div>
        <div className={styles.header}>
            <LogoHeader/>
            <MenuHeader/>
        </div>
    </div>
  )
}

export default Header