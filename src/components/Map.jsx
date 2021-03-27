import React from 'react'
//import Header from './components/Header'

export const Map = () => {
  return (
    <header className="header">
      <ul className="menu__list">
        <li className="menu__item"><button onClick={() => {this.navigateTo("login")}} className="menu__link"></button>Карта</li>
        <li className="menu__item"><button onClick={() => {this.navigateTo("profile")}} className="menu__link"></button>Профиль</li>
        <li className="menu__item"><button onClick={() => {this.navigateTo("logout")}} className="menu__link"></button>Выйти</li>
      </ul>
    </header>
  )
}
