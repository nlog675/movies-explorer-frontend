import React from "react";

function NavTab() {
  return (
    <nav className="NavTab">
      <ul className="NavTab__list">
        <li className="NavTab__item">
          <a href="#about-project" className="NavTab__button">О проекте</a>
        </li>
        <li className="NavTab__item">
          <a href="#techs" className="NavTab__button">Технологии</a>
        </li>
        <li className="NavTab__item">
          <a href="#about-me" className="NavTab__button">Студент</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;