import React from "react";
import { useState } from "react";
import Form from "../Form/Form";

const Register = ({ onRegister }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(old => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = state;

    if (!email || !password || !name) return;

    onRegister(name, email, password)
      .catch((err) => console.log(err));
  }

  return (
    <Form 
    title="Добро пожаловать!"
    button="Зарегистрироваться"
    text="Уже зарегистрированы?"
    link="Войти"
    page="/signin"
    handleSubmit={handleSubmit}
    >
      <label className="Form__label" htmlFor="register-name">Имя</label>
      <input 
        className="Form__input"
        id="register-name"
        name="name"
        type="text"
        required
        onChange={handleChange}
      />
      <span id="error-name-register" className="Form__error" />
      <label className="Form__label" htmlFor="register-email">E-mail</label>
      <input 
        className="Form__input"
        id="register-email"
        name="email"
        type="email"
        required
        onChange={handleChange}
      />
      <span id="error-email-register" className="Form__error Form__error_visible">Что-то пошло не так...</span>
      <label className="Form__label" htmlFor="register-password">Пароль</label>
      <input 
        className="Form__input"
        id="register-password"
        name="password"
        type="password"
        required
        onChange={handleChange}
      />
      <span id="error-password-register" className="Form__error" />
    </Form>
  )
}

export default Register;