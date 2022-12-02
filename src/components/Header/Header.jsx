import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import logo from "../../images/logo.svg"

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <img src={logo} alt="Логотип" className="Header__logo" />
        {/* <Routes>
          <Route path="/" element=
            {
              <>
              <Link className="Header__btn" to="signin">Войти</Link>
              <Link className="Header__btn" to="/signup">Регистрация</Link>
              </>
            }
          />
          <Route path="/" element=
            {
              <Link className="Header__btn" to="/signup">Регистрация</Link>
            }
          />
        </Routes> */}
      </div>
    </header>
  )
}

export default Header;