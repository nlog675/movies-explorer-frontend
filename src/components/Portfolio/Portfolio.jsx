import React from "react";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h3 className="Portfolio__title">Портфолио</h3>
      <ul className="Portfolio__list">
        <li className="Portfolio__links">
          <a className="Portfolio__link" href="https://github.com/nlog675/how-to-learn" target="blank">
            <p className="Portfolio__link-text">Статичный сайт</p>
            <span className="Portfolio__link-span">↗</span>
          </a>
        </li>
        <li className="Portfolio__links">
          <a className="Portfolio__link" href="https://github.com/nlog675/russian-travel" target="blank">
            <p className="Portfolio__link-text">Адаптивный сайт</p>
            <span className="Portfolio__link-span">↗</span>
          </a>
        </li>
        <li className="Portfolio__links">
          <a className="Portfolio__link" href="https://github.com/nlog675/react-mesto-api-full" target="blank">
            <p className="Portfolio__link-text">Одностраничное приложение</p>
            <span className="Portfolio__link-span">↗</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;