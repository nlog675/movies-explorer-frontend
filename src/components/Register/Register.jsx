import React, { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Form from "../Form/Form";

const Register = ({ onRegister }) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation();

  const handleSubmit = e => {
    e.preventDefault();
    onRegister(values)
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <Form 
    title="Добро пожаловать!"
    button="Зарегистрироваться"
    text="Уже зарегистрированы?"
    link="Войти"
    page="/signin"
    handleSubmit={handleSubmit}
    isValid={isValid}
    >
      <label className="Form__label" htmlFor="register-name">Имя</label>
      <input 
        className="Form__input"
        id="register-name"
        name="name"
        type="text"
        required
        onChange={handleChange}
        minLength="2"
        maxLength="40"
        value={values.name || ''}
      />
      <span id="error-name-register" className="Form__error">{errors.name}</span>
      <label className="Form__label" htmlFor="register-email">E-mail</label>
      <input 
        className="Form__input"
        id="register-email"
        name="email"
        type="email"
        required
        onChange={handleChange}
        value={values.email || ''}
      />
      <span id="error-email-register" className="Form__error Form__error_visible">{errors.email}</span>
      <label className="Form__label" htmlFor="register-password">Пароль</label>
      <input 
        className="Form__input"
        id="register-password"
        name="password"
        type="password"
        required
        onChange={handleChange}
        value={values.password || ''}
      />
      <span id="error-password-register" className="Form__error">{errors.password}</span>
    </Form>
  )
}

export default Register;