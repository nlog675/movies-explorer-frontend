import React from "react";
import Form from "../Form/Form";

function Register() {
  return (
    <Form 
    title="Добро пожаловать!"
    button="Зарегистрироваться"
    text="Уже зарегистрированы?"
    link="Войти"
    page="/signin"
    >
      <label className="Form__label" htmlFor="register-name">Имя</label>
      <input 
        className="Form__input"
        id="register-name"
        name="name"
        type="text"
        required
      />
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

export default Register;