import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import logo from "../../images/logo.svg"

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <Link to="/">
          <img src={logo} alt="Логотип" className="Header__logo" />
        </Link>
        <div className="Header__links">
          <Link className="Header__btn" to="signup">Регистрация</Link>
          <Link className="Header__btn Header__btn_active" to="/signin">Войти</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;