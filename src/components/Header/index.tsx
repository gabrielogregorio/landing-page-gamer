import React, { useState } from 'react'
import styles from './styles.module.css'

export const Header = () => {
  const [ activeMenu, setActiveMenu ] = useState<boolean>(false)

  function handleActiveMenu(e: any) {
    setActiveMenu(!activeMenu)
  }
  
  return (
    <header className={styles.header}>
    <a style={{['--i' as any]: 1}} className={styles.logo} href="/">gamers#GG</a>
    
    <button onClick={handleActiveMenu} className={styles.toggle}>
      <svg className={styles.svg__hamburguer} fill="#5533ff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
        <path className={ activeMenu ? '' : styles.svg__show} d="
        M 0,0  L 50,0 L 50,4 L 0,4 Z
        M 0,23  L 50,23 L 50,27 L 0,27 Z
        M 0,46  L 50,46 L 50,50 L 0,50 Z
        "/>
        <path className={ activeMenu ? styles.svg__show : ''} d="M 0,4 L 21,25 L 0,46 L 4,50 L 25,30 L 46,50 L 50,46 L 30,25 L 50,4 L 46,0 L 25,20 L 5,0 Z"/>
      </svg>
    </button>
    <nav className={activeMenu ? styles.activeMenu : ''}>
      <ul>
        <li style={{['--i' as any]: 2}}><a className={styles.active} href="#home">inicio</a></li>
        <li style={{['--i' as any]: 4}}><a href="#about">sobre</a></li>
        <li style={{['--i' as any]: 6}}><a href="#news">noticias</a></li>
        <li style={{['--i' as any]: 8}}><a href="#events">eventos</a></li>
        <li style={{['--i' as any]: 10}}><a href="#contact">contato</a></li>
      </ul>
    </nav>
  </header>

  )
}