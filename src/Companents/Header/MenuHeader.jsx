import React from 'react'
import styles from './Header.module.css'

function MenuHeader() {
  return (
    <div >
        <ul className={styles.ul}>
            <li>
                <a href="#">Главная</a>
            </li>
            <li>
                <a href="#">О нас</a>
            </li>
            <li>
                <a href="#">Контакты</a>
            </li>
        </ul>
    </div>
  )
}

export default MenuHeader