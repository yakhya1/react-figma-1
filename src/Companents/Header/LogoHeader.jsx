import React from 'react'
import SurtHeader from "./Group1.jpg"
import styles from './Header.module.css'


function LogoHeader() {
  return (
    <div className={styles.surt}>
        <img src={SurtHeader} alt="logo" />
    </div>
  )
}

export default LogoHeader