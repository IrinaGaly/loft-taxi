import React from 'react'
import logo from './assets/logo.svg';
import './stylesheets/main.css';
import { LoginWithAuth } from './pages/Login';
import { ProfileWithAuth } from './pages/Profile';
import { Registration } from './pages/Registration';
import { Map } from './components/Map';
import { Header } from './components/Header';
import { withAuth } from './AuthContext'

const PAGES = {
  login: (props) => <LoginWithAuth {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
  registration: (props) => <Registration {...props}/>,
  map: (props) => <Map {...props}/>
}

export class App extends React.Component {

  state = { currentPage: "login" }

  navigateTo = (page) => {
    // this.setState({currentPage: page})
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  }
  render() {
    return <>
      {this.state.currentPage !== "login" && <Header navigate={this.navigateTo}/>}
      <div className="wrapper">
        <div className="loft__wrapper">
          {this.state.currentPage === "registration" && <div className="loft__header">
            <div className="loft__header-wrapper">
              <img src={ logo } className="loft__logo" alt="logo" />
            </div>
          </div>}
          {this.state.currentPage === "login" && <div className="loft__header">
            <div className="loft__header-wrapper">
              <img src={ logo } className="loft__logo" alt="logo" />
            </div>
          </div>}
          <div className="loft__login">
            {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}

            {/* {this.state.currentPage === 'login' && <LoginWithAuth navigate={this.navigateTo}/>} 
            {this.state.currentPage === 'registration' && <Registration navigate={this.navigateTo} />}
            {this.state.currentPage === 'map' && <Map />}
            {this.state.currentPage === 'profile' && <ProfileWithAuth />} */}
          </div>
        </div>
      </div>
    </>; 
  }
}

export default withAuth(App);
