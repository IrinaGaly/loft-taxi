import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Input } from './../components/Input'
import { withAuth } from "./../AuthContext";

// export const Login = ({navigate}) => {
//   return (
//     <form className="login__form">
//       <h2 className="login__title">Войти</h2>
//       <Input name="email" id="email" label="Email" placeholder="Введите email" myClass="login__label" />
//       <Input name="password" id="password" label="Пароль" placeholder="Введите пароль" myClass="login__label" />
//       <button className="login__reset-password">Забыли пароль?</button>
//       <input type="submit" className="login__submit" value="Войти" onClick={() => {navigate("map")}} />
//       <div className="login__signup-wrapper"><span className="login__new-user">Новый пользователь?</span><button className="login__loginup" onClick={() => {navigate("registration")}} >Регистрация</button></div>
//     </form>
//   )
// }

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
      // <>
      //   {
      //   this.props.isLoggedIn ? (
      //     <p>
      //       You are logged in{" "}
      //       <button onClick={this.goToProfile}>
      //         go to profile
      //       </button>
      //     </p>
      //   ) : (
      //     <form className="login__form">
      //      <h2 className="login__title">Войти</h2>
      //      <Input name="email" id="email" label="Email" placeholder="Введите email" myClass="login__label" />
      //      <Input name="password" id="password" label="Пароль" placeholder="Введите пароль" myClass="login__label" />
      //      <button className="login__reset-password">Забыли пароль?</button>
      //      <input type="submit" className="login__submit" value="Войти" onClick={() => {this.navigate("map")}} />
      //      <div className="login__signup-wrapper"><span className="login__new-user">Новый пользователь?</span><button className="login__loginup" onClick={() => {this.navigate("registration")}} >Регистрация</button></div>
      //    </form>
      //  )
      //   }
      // </>
        // this.props.isLoggedIn ? (
        //   <p>
        //     You are logged in{" "}
        //     <button onClick={this.goToProfile}>
        //       go to profile
        //     </button>
        //   </p>
        // ) :
         
          // <form onSubmit={this.authenticate}>
          //   <label htmlFor="email">Email:</label>
          //   <input id="email" type="email" name="email" size="28" />
          //   <label htmlFor="password">Password:</label>
          //   <input id="password" type="password" name="password" size="28" />
          //   <button type="submit" onClick={this.props.isLoggedIn ? this.goToProfile : null }>Log in</button>
          // </form>
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
