import React from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();
  const isMain = location.pathname === '/';

  return (
    <header className="Header">
    {
      isMain ? (
        <div className="Header__container">
        <Link to="/">
          <img src={logo} alt="Логотип" className="Header__logo" />
        </Link>
        <div className="Header__links">
          <Link className="Header__btn" to="signup">Регистрация</Link>
          <Link className="Header__btn Header__btn_active" to="/signin">Войти</Link>
        </div>
      </div>
      ) : <Navigation />
    }
      
    </header>
  )
}

export default Header;