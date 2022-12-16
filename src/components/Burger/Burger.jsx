import React from "react";
import { Link, useLocation } from "react-router-dom";

function Burger({ isBurgerActive, setIsBurgerActive, moviesLink, savedMoviesLink, profileLink }) {
  const mainLink = (
    <Link className={'Navigation__link'} 
      to="/">
        Главная
      </Link>
  )
  return (
    <div className="Burger">
      <div className={ !isBurgerActive ? "Burger__btn" : "Burger__btn Burger__btn_active"} onClick={() => setIsBurgerActive(!isBurgerActive)}>
        <span className={!isBurgerActive ? "Burger__span" : ""} />
      </div>
      <div className={ isBurgerActive ? "Burger__menu Burger__menu_active" : "Burger__menu" } onClick={() => setIsBurgerActive(false)}>
        <div className="Burger__content" onClick={(e) => e.stopPropagation()}>
          <ul className="Burger__links">
            <li className="Burger__item" onClick={() => setIsBurgerActive(false)}>{mainLink}</li>
            <li className="Burger__item" onClick={() => setIsBurgerActive(false)}>{moviesLink}</li>
            <li className="Burger__item" onClick={() => setIsBurgerActive(false)}>{savedMoviesLink}</li>
          </ul>
          <div className="Burger__account" onClick={() => setIsBurgerActive(false)}>{profileLink}</div>
        </div>
      </div>
    </div>
  )
}

export default Burger;