import React from 'react'
import { Input } from './../components/Input'

export const Login = ({navigate}) => {
  return (
    <form className="login__form">
      <h2 className="login__title">Войти</h2>
      <Input name="email" id="email" label="Email" placeholder="Введите email" myClass="login__label" />
      <Input name="password" id="password" label="Пароль" placeholder="Введите пароль" myClass="login__label" />
      <button className="login__reset-password">Забыли пароль?</button>
      <input type="submit" className="login__submit" value="Войти" onClick={() => {navigate("map")}} />
      <div className="login__signup-wrapper"><span className="login__new-user">Новый пользователь?</span><button className="login__loginup" onClick={() => {navigate("registration")}} >Регистрация</button></div>
    </form>
  )
}
