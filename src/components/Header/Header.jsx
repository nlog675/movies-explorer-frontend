import React from "react";
import logo from "../../images/logo.svg"

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Логотип" className="Header__logo" />
    </header>
  )
}

export default Header;