import React from 'react'
import logo from './assets/logo.svg';
import './stylesheets/main.css';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Registration } from './pages/Registration';
import { Map } from './components/Map';
import { Header } from './components/Header';

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
      {this.state.currentPage !== "login" && <Header navigate={this.navigateTo}/>}
      <div className="wrapper">
        <div className="loft__wrapper">
          <div className="loft__header">
            <div className="loft__header-wrapper">
              <img src={ logo } className="loft__logo" alt="logo" />
            </div>
          </div>
          <div className="loft__login">
            {this.state.currentPage === 'login' && <Login navigate={this.navigateTo}/>}
            {this.state.currentPage === 'registration' && <Registration />}
            {this.state.currentPage === 'map' && <Map />}
            {this.state.currentPage === 'profile' && <Profile />}
          </div>
        </div>
      </div>
    </>; 
  }
}

export default App;
