import React from 'react'
import { Input } from './../components/Input'

export const Registration = ({navigate}) => {
  return (
    <form className="login__form">
      <h2 className="login__title">Регитсрация</h2>
      <Input name="email" id="email" label="Email*" placeholder="Введите email" myClass="login__label" />
      <Input name="name" type="text" id="name" label="Как вас зовут?*" placeholder="Введите ваше имя" myClass="login__label" />
      <Input name="password" type="password" id="password" label="Придумайте пароль*" placeholder="Введите пароль" myClass="login__label" />
      <input type="submit" className="login__submit" value="Зарегестрироваться" />
      <div className="login__signup-wrapper"><span className="login__new-user">Уже зарегестрировались?</span><button className="login__loginup" onClick={() => {navigate("login")}}>Войти</button></div>
    </form>
  );
}
