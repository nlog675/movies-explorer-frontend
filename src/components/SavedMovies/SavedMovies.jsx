import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  const [inputValue, setInputValue] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [onLoad, setOnLoad] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckBox = () => {
    setIsShortMovies(!isShortMovies);
  };

  const handleSearch = (inputValue, isShortMovies) => {
    setOnLoad(true);
    setIsShortMovies(isShortMovies);
    setInputValue(inputValue);

    const localFilteredFilms = JSON.parse(localStorage.getItem('filteredMovies'));
    if (!localFilteredFilms) {
      setMoviesNotFound(true);
      } 
  };

  return (
    <div className="SavedMovies">
      <SearchForm 
      handleSearch={handleSearch}
      />
      <MoviesCardList />
    </div>
  )
}

export default SavedMovies;