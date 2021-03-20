import React from 'react'

export const Login = () => {
  return (
    <form className="login__form">
      <h2 className="login__title">Войти</h2>
      <div>
        <label htmlFor="email" className="login__label">Email</label>
      </div>
        <input id="email" type="email" placeholder="Введите email" className="login__input" />
      <div>
        <label htmlFor="password" className="login__label">Пароль</label>
      </div>
      <input id="password" type="password" placeholder="Введите пароль" className="login__input--password" />
      <button className="login__reset-password">Забыли пароль?</button>
      <input type="submit" className="login__submit" value="Войти" onClick={() => {this.navigateTo("map")}} />
      <div className="login__signup-wrapper"><span className="login__new-user">Новый пользователь?</span><button className="login__loginup">Регистрация</button></div>
    </form>
  )
}
