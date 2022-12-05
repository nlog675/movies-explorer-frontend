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
    ></Form>
  )
}

export default Register;