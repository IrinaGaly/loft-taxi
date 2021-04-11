import React from 'react'
import logoHeader from './../assets/logoHeader.svg';
import { Switch, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <img src={ logoHeader } className="loft__logo-header" alt="logo" />
      <ul className="menu__list">
        <li className="menu__item"><div className="menu__link"><Link to="/">Home</Link></div></li>
        <li className="menu__item"><div className="menu__link"><Link to="/Map">Map</Link></div></li>
        <li className="menu__item"><div className="menu__link"><Link to="/Login">Profile</Link></div></li>
      </ul>
    </header>
  );
}
