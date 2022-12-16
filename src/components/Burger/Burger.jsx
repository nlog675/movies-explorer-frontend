import React from "react";

function Burger({ isBurgerActive, setIsBurgerActive }) {
  return (
    <div className="Burger">
      <div className={ !isBurgerActive ? "Burger__btn" : "Burger__btn Burger__btn_active"} onClick={() => setIsBurgerActive(!isBurgerActive)}>
        <span className={!isBurgerActive ? "Burger__span" : ""} />
      </div>
      <div className={ isBurgerActive ? "Burger__menu Burger__menu_active" : "Burger__menu" } onClick={() => setIsBurgerActive(false)}>
        <div className="Burger__content" onClick={(e) => e.stopPropagation()}></div>
      </div>
    </div>
  )
}

export default Burger;