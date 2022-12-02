import React from "react";
import searchIcon from "../../images/find-3.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="SearchForm__container">
      <form className="SearchForm">
        <input 
          className="SearchForm__input"
          type="text" 
          placeholder="Фильм"
          name="movieSearch"
          id="movieSearch" />
        <button type="submit" className="SearchForm__btn">
          <img className="Searchform__btn-img" alt="Иконка поиска" src={searchIcon} />
        </button>
      </form>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm;