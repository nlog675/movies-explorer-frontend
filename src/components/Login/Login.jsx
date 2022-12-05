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
      <label className="Form__label" htmlFor="register-email">E-mail</label>
      <input 
        className="Form__input"
        id="register-email"
        name="email"
        type="email"
        required
      />
      <label className="Form__label" htmlFor="register-password">Пароль</label>
      <input 
        className="Form__input"
        id="register-password"
        name="password"
        type="password"
        required
      />

    </Form>
  )
}

export default Login;