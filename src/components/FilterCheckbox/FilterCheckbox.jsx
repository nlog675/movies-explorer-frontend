import React from "react";

function FilterCheckbox() {
  return (
    <div className="FilterCheckbox">
      <div className="FilterCheckbox__label">
        <input id="checkbox" type="checkbox" className="FilterCheckbox__input" />
        <div className="FilterCheckbox__slider FilterCheckbox__round"></div>
      </div>
      <p className="FilterCheckbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;