import React from "react";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h3 className="Portfolio__title">Портфолио</h3>
      <ul className="Portfolio__list">
        <li className="Portfolio__links">
          <a className="Portfolio__link" href="https://github.com/nlog675/how-to-learn" target="blank">Статичный сайт</a>
          <span className="Portfolio__link-span">↗</span>
        </li>
        <li className="Portfolio__links">
          <a className="Portfolio__link" href="https://github.com/nlog675/russian-travel" target="blank">Адаптивный сайт</a>
          <span className="Portfolio__link-span">↗</span>
        </li>
        <li className="Portfolio__links">
          <a className="Portfolio__link" href="https://github.com/nlog675/react-mesto-api-full" target="blank">Одностраничное приложение</a>
          <span className="Portfolio__link-span">↗</span>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;