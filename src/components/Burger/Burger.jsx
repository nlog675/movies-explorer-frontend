import React from "react";

function Burger({ isBurgerActive, setIsBurgerActive, moviesLink, savedMoviesLink, profileLink }) {
  return (
    <div className="Burger">
      <div className={ !isBurgerActive ? "Burger__btn" : "Burger__btn Burger__btn_active"} onClick={() => setIsBurgerActive(!isBurgerActive)}>
        <span className={!isBurgerActive ? "Burger__span" : ""} />
      </div>
      <div className={ isBurgerActive ? "Burger__menu Burger__menu_active" : "Burger__menu" } onClick={() => setIsBurgerActive(false)}>
        <div className="Burger__content" onClick={(e) => e.stopPropagation()}>
          <ul className="Burger__links">
            <li className="Burger__item">Главная</li>
            <li className="Burger__item">{moviesLink}</li>
            <li className="Burger__item">{savedMoviesLink}</li>
            <li className="Burger__item">{profileLink}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Burger;