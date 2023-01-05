import React from "react";

function FilterCheckbox({ handleShortMovies, shortMovies }) {
  return (
    <div className="FilterCheckbox">
      <label htmlFor="checkbox" className="FilterCheckbox__label">
        <input 
          id="checkbox" 
          type="checkbox" 
          className="FilterCheckbox__input" 
          onChange={handleShortMovies}
          checked={shortMovies}
        />
        <div className="FilterCheckbox__slider FilterCheckbox__round"></div>
      </label>
      <p className="FilterCheckbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;