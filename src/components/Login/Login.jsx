import React from "react";
import { useState } from "react";
import Form from "../Form/Form";

function Login({ onLogin }) {
  const initValues = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(old => ({
      ...old,
      [name]: value
    }));
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = state;
    if (!email || !password) return;
    onLogin(email, password)
      .catch((err) => console.log(err));
  };

  return (
    <Form 
    title="Рады видеть!"
    button="Войти"
    text="Ещё не зарегистрированы?"
    link="Регистрация"
    page="/signup"
    handleSubmit={handleSubmit}
    >
      <label className="Form__label" htmlFor="login-email">E-mail</label>
      <input 
        className="Form__input"
        id="login-email"
        name="email"
        type="email"
        required
        onChange={handleChange}
      />
      <span id="error-email-login" className="Form__error" />
      <label className="Form__label" htmlFor="login-password">Пароль</label>
      <input 
        className="Form__input"
        id="login-password"
        name="password"
        type="password"
        required
        onChange={handleChange}
      />
      <span id="error-name-login" className="Form__error" />

    </Form>
  )
}

export default Login;