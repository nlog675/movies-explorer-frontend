import React from "react";

function FilterCheckbox() {
  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__label" htmlFor="checkbox">
        <input id="checkbox" type="checkbox" className="FilterCheckbox__input" />
        <div className="FilterCheckbox__slider FilterCheckbox__round"></div>
      </label>
      <p className="FilterCheckbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;