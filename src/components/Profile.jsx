import React from 'react'

export const Profile = () => {
  return (
    <form className="profile__form">
      <h2 className="profile__title">Профиль</h2>
      <span className="profile__subtitle">Ввдеите платежные данные</span>
      <div className="profile__form--wrapper">
        <div className="profile__form--fields">
          <div>
            <label htmlFor="name" className="profile__label">Имя владельца</label>
          </div>
            <input id="name" type="text" placeholder="Введите имя" className="profile__input" />
          <div>
            <label htmlFor="cardNumber" className="profile__label">Номер карты</label>
          </div>
          <input id="cardNumber" type="text" placeholder="Введите номер карты" className="profile__input" />
          <div className="d-flex"> 
            <div className="profile__input-date">
              <label htmlFor="expDate" className="profile__label">MM/YY</label>
              <input id="expDate" type="date" placeholder="Введите пароль" className="profile__input" />
            </div>
            <div className="d-flex direction-column">
              <label htmlFor="cvc" className="profile__label">CVC</label>
              <input id="cvc" type="text" placeholder="Введите пароль" className="profile__input" />
            </div>
          </div>
        </div>
        <div className="profile__card">
        </div>
      </div>
      <input type="submit" className="profile__submit" value="Войти" onClick={() => {this.navigateTo("map")}} />
    </form>
  )
}
