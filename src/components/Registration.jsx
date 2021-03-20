import React from 'react'

export const Registration = () => {
  return (
    <form className="login__form">
      <h2 className="login__title">Регитсрация</h2>
      <div>
        <label hymlFor="email" className="login__label">Email*</label>
      </div>
        <input id="email" type="email" placeholder="Введите email" className="login__input" />
      <div>
        <label for="name" className="login__label">Как вас зовут?*</label>
      </div>
        <input id="name" type="text" placeholder="Введите ваше имя" className="login__input" />  
      <div>
        <label for="password" className="login__label">Придумайте пароль*</label>
      </div>
      <input name="password" type="password" placeholder="Введите пароль" className="login__input--password" />
      <input type="submit" className="login__submit" value="Зарегестрироваться" />
      <div className="login__signup-wrapper"><span className="login__new-user">Уже зарегестрировались?</span><button className="login__loginup">Войти</button></div>
    </form>
  );
}
