import React from "react";
import { Link } from "react-router-dom";
import account from "../../images/account.svg"
import logo from "../../images/logo.svg"

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation__container">
      <Link to="/">
          <img src={logo} alt="Логотип" className="Header__logo" />
        </Link>
        <ul className="Navigation__links">
          <li className="Navigation__item">
            <Link className="Navigation__link Navigation__link_active" to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="Navigation__item">
            <Link className="Navigation__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className="Navigation__account">
          <Link className="Navigation__account-link" to="/profile">
            <img className="Navigation__account-image" src={account} alt="Иконка профиля" />
            Аккаунт
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;