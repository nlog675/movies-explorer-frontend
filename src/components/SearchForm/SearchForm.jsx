import React, {  useState } from "react";
import searchIcon from "../../images/find-3.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ handleSearch, handleCheckBox }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) {
      setErrorMessage('Нужно ввести ключевое слово');
      return
    } else {
    handleSearch(inputValue);
    setInputValue('');
    }
  };

  const handleChange = e => {
    setInputValue(e.target.value)
    setErrorMessage('');
  };

  return (
    <div className="SearchForm">
      <div className="SearchForm__container">
      <span className="SearchForm__error">{errorMessage}</span>
        <form className="SearchForm__form" onSubmit={handleSubmit}>
          <input 
            className="SearchForm__input"
            type="text" 
            placeholder="Фильм"
            name="movieSearch"
            id="movieSearch"
            onChange={handleChange}
            value={inputValue}/>
          <button type="submit" className="SearchForm__btn">
            <img className="SearchForm__btn-img" alt="Иконка поиска" src={searchIcon} />
          </button>
        </form>
        <FilterCheckbox 
          handleCheckBox={handleCheckBox}
        />
      </div>
    </div>
  )
}

export default SearchForm;