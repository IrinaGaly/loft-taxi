import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Input } from './../components/Input'
import { withAuth } from "./../AuthContext";
export class Login extends Component {
  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate("profile");
  };

  goToRegistration = (event) => {
    event.preventDefault();
    this.props.navigate("registration");
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <>
        {
          (
          <form onSubmit={this.authenticate} className="login__form">
            <h2 className="login__title">Войти</h2>
            <Input name="email" id="email" label="Email" placeholder="Введите email" myClass="login__label" />
            <Input name="password" id="password" label="Пароль" placeholder="Введите пароль" myClass="login__label" />
            <button className="login__reset-password">Забыли пароль?</button>
            <button type="submit" onClick={this.props.isLoggedIn ? this.goToProfile : null } className="login__submit">Войти</button>
            <div className="login__signup-wrapper"><span className="login__new-user">Новый пользователь?</span><button className="login__loginup" onClick={!this.props.isLoggedIn ? this.goToRegistration : null }>Регистрация</button></div>
          </form>
        )}
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigateTo: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);
