import React from 'react'
import PropTypes from "prop-types";
import './stylesheets/main.css';
import { LoginWithConnect } from './pages/Login';
import { ProfileWithConnect } from './pages/Profile';
//import { Registration } from './pages/Registration';
import { Map } from './components/Map';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
export class App extends React.Component {

  render() {
    return <>
      { this.props.isLoggedIn === true && <Header /> }
      <div className="wrapper">
        <div className="loft__wrapper">
        { this.props.isLoggedIn === false && <Sidebar /> }
          <div className="loft__login">
            <Switch>
              <Route exact path="/" component={ LoginWithConnect } />
              <PrivateRoute path="/map" component={ Map } />
              <PrivateRoute path="/profile" component={ ProfileWithConnect } />
            </Switch>
          </div>
        </div>
      </div>
    </>; 
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
