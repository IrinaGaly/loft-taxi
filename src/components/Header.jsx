import React from 'react'
import logoHeader from './../assets/logoHeader.svg';

export const Header = ({navigate}) => {
  return (
    <header className="header">
      <img src={ logoHeader } className="loft__logo-header" alt="logo" />
      <ul className="menu__list">
        <li className="menu__item"><button onClick={() => {navigate("map")}} className="menu__link">Карта</button></li>
        <li className="menu__item"><button onClick={() => {navigate("profile")}} className="menu__link">Профиль</button></li>
        <li className="menu__item"><button onClick={() => {navigate("login")}} className="menu__link">Выйти</button></li>
      </ul>
    </header>
  );
}
