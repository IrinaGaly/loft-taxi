import React from 'react'
import { connect } from 'react-redux'
import { logOut } from './../actions'

import { Input } from './../components/Input'
import { Card } from './../components/Card';

export const Profile = () => {
  return (
    <form className="profile__form">
      <h2 className="profile__title">Профиль</h2>
      <span className="profile__subtitle">Ввдеите платежные данные</span>
      <div className="profile__form--wrapper">
        <div className="profile__form--fields">
          <Input name="name" type="text" id="name" label="Как вас зовут?*" placeholder="Введите ваше имя" myClass="profile__label" />
          <Input name="cardNumber" type="text" id="cardNumber" label="Номер карты" placeholder="Номер карты" myClass="profile__label" />

          <div className="d-flex"> 
            <div className="profile__input-date">
              <Input name="expDate" type="date" id="expDate" label="MM/YY" myClass="profile__label" />
            </div>
            <div className="d-flex direction-column">
              <Input name="cvc" type="text" id="cvc" label="Введите пароль" placeholder="Введите пароль" myClass="profile__label" />
            </div>
          </div>
        </div>
        <Card />
      </div>
      <input type="submit" className="profile__submit" value="Сохранить" />
    </form>
  )
}

export const ProfileWithConnect = connect(
  null,
  { logOut }
)(Profile);
