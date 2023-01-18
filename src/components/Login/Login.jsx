import React, { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Form from "../Form/Form";

function Login({ onLogin }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation();
  
  const handleSubmit = e => {
    e.preventDefault();
    onLogin(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <Form 
    title="Рады видеть!"
    button="Войти"
    text="Ещё не зарегистрированы?"
    link="Регистрация"
    page="/signup"
    handleSubmit={handleSubmit}
    isValid={isValid}
    >
      <label className="Form__label" htmlFor="login-email">E-mail</label>
      <input 
        className="Form__input"
        id="login-email"
        name="email"
        type="email"
        required
        onChange={handleChange}
        value={values.email || ''}
      />
      <span id="error-email-login" className="Form__error">{errors.email}</span>
      <label className="Form__label" htmlFor="login-password">Пароль</label>
      <input 
        className="Form__input"
        id="login-password"
        name="password"
        type="password"
        required
        onChange={handleChange}
        value={values.password || ''}
      />
      <span id="error-name-login" className="Form__error">{errors.password}</span>

    </Form>
  )
}

export default Login;