import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import account from "../../images/account.svg"
import logo from "../../images/logo.svg"
import Burger from "../Burger/Burger";

function Navigation() {
  const location = useLocation();
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const moviesLink = (
    <Link className={
    location.pathname === '/movies' ?
    'Navigation__link Navigation__link_active' :
    'Navigation__link'
    } 
    to="/movies">
      Фильмы
    </Link>
  );
  const savedMoviesLink = (
    <Link className={
    location.pathname === '/saved-movies' ?
    'Navigation__link Navigation__link_active' :
    'Navigation__link'
    } 
    to="/saved-movies">
      Сохранённые фильмы
    </Link>
  );

  const profileLink = (
    <Link className="Navigation__account-link" to="/profile">
      <img className="Navigation__account-image" src={account} alt="Иконка профиля" />
      Аккаунт
    </Link>
  )

  return (
    <nav className="Navigation">
      <div className="Navigation__container">
      <Link to="/">
        <img src={logo} alt="Логотип" className="Header__logo" />
      </Link>
      <Burger 
      isBurgerActive={isBurgerActive} 
      setIsBurgerActive={setIsBurgerActive}
      moviesLink={moviesLink}
      savedMoviesLink={savedMoviesLink}
      profileLink={profileLink}/>
        <ul className="Navigation__links">
          <li className="Navigation__item">{moviesLink}</li>
          <li className="Navigation__item">{savedMoviesLink}</li>
        </ul>
        <div className="Navigation__account">{profileLink}</div>
      </div>
    </nav>
  )
}

export default Navigation;