import React from 'react'
import Number from './Number'
import styles from './Main.module.css'
import Button from "./Button"

function Main() {
  return (
    <div className={styles.main}>
        <Number/>
        <Button/>
    </div>
  ) 
}

export default Main