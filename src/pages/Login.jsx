import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { authenticate } from './../actions'

import { Input } from './../components/Input'
export class Login extends Component {
    authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  render() {
    return (
      <>
        {
          (
          <form onSubmit={ this.authenticate } className="login__form">
            <h2 className="login__title">Войти</h2>
            <Input name="email" id="email" label="Email" placeholder="Введите email" myClass="login__label" />
            <Input name="password" id="password" label="Пароль" placeholder="Введите пароль" myClass="login__label" />
            <button className="login__reset-password">Забыли пароль?</button>
            <button type="submit" className="login__submit">Войти</button>
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

export const LoginWithConnect = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Login);
