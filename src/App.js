import React from 'react'
import logo from './logo.svg';
import logoHeader from './logoHeader.svg';
import './stylesheets/main.css';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { Registration } from './components/Registration';
import { Map } from './components/Map';

//import Header from './components/header';

const PAGES = {
  login: <Login/>,
  profile: <Profile/>,
  registration: <Registration/>,
  map: <Map/>
}

export class App extends React.Component {

  state = { currentPage: "login" }

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }
  render() {
    return <>
      <header className="header">
      <img src={ logoHeader } className="loft__logo-header" alt="logo" />
        <ul className="menu__list">
          <li className="menu__item"><button onClick={() => {this.navigateTo("login")}} className="menu__link active">Карта</button></li>
          <li className="menu__item"><button onClick={() => {this.navigateTo("profile")}} className="menu__link">Профиль</button></li>
          <li className="menu__item"><button onClick={() => {this.navigateTo("registration")}} className="menu__link">Выйти</button></li>
        </ul>
      </header>
      <div className="wrapper">
        <div className="loft__wrapper">
          <div className="loft__header">
            <div className="loft__header-wrapper">
              <img src={ logo } className="loft__logo" alt="logo" />
            </div>
          </div>
          <div className="loft__login">
            {PAGES[this.state.currentPage]}
          </div>
        </div>
      </div>
    </>; 
  }
}

export default App;
