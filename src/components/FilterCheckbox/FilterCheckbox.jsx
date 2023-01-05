import React from "react";

function FilterCheckbox({ handleCheckBox }) {
  return (
    <div className="FilterCheckbox">
      <label htmlFor="checkbox" className="FilterCheckbox__label">
        <input 
          id="checkbox" 
          type="checkbox" 
          className="FilterCheckbox__input" 
          onChange={handleCheckBox}
          
        />
        <div className="FilterCheckbox__slider FilterCheckbox__round"></div>
      </label>
      <p className="FilterCheckbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;