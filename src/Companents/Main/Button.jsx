import React from 'react'
import styles from "./Main.module.css"

function Button() {
  return (
    <div className={styles.button}>
        <div className={styles.first}>Увеличить</div>
        <div className={styles.second}>Уменьшить</div>
        <div className={styles.endButton}>Сбросить</div>
        
    </div>
  )
}

export default Button