import React from "react";

function NavTab() {
  return (
    <nav className="NavTab">
      <ul className="NavTab__list">
        <li className="NavTab__item">
          <button type="button" className="NavTab__button">О проекте</button>
        </li>
        <li className="NavTab__item">
          <button type="button" className="NavTab__button">Технологии</button>
        </li>
        <li className="NavTab__item">
          <button type="button" className="NavTab__button">Студент</button>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;