import React from "react";
import Form from "../Form/Form";

function Login() {
  return (
    <Form 
    title="Рады видеть!"
    button="Войти"
    text="Ещё не зарегистрированы?"
    link="Регистрация"
    page="/signup"
    >
      <label className="Form__label" htmlFor="login-email">E-mail</label>
      <input 
        className="Form__input"
        id="login-email"
        name="email"
        type="email"
        required
      />
      <span id="error-email-login" className="Form__error" />
      <label className="Form__label" htmlFor="login-password">Пароль</label>
      <input 
        className="Form__input"
        id="login-password"
        name="password"
        type="password"
        required
      />
      <span id="error-name-login" className="Form__error" />

    </Form>
  )
}

export default Login;