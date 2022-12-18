import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Form({title, children, button, text, page, link}) {
  return (
    <div className="Form">
      <div className="Form__container">
        <form className="Form__form">
          <Link to="/" className="Form__logo">
            <img src={logo} alt="Логотип"/>
          </Link>
          <h2 className="Form__title">{title}</h2>
          {children}
          <button type="submit" className="Form__btn">{button}</button>
        </form>
        <div className="Form__caption">
          <p className="Form__caption-text">{text}</p>
          <Link to={page} className="Form__caption-link">{link}</Link>
        </div>
      </div>
    </div>
  )
}

export default Form;