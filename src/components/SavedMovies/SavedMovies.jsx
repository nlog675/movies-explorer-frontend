import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

function SavedMovies({ savedMovies, saveMovie, deleteMovie }) {
  const [savedInputValue, setSavedInputValue] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [savedMoviesToShow, setSavedMoviesToShow] = useState([]);

  const handleSearch = (savedInputValue) => {
    setSavedInputValue(savedInputValue);
  };

  const handleCheckBox = () => {
    setIsShortMovies(!isShortMovies);
  }

  const handleFilter = (movies, inputValue, isShortMovies) => {
    let moviesToFilter = movies;
    let moviesFilteredByValue;
    if (isShortMovies) {
      moviesToFilter = moviesToFilter.filter((movie) => movie.duration < 40);
    }
    moviesFilteredByValue = moviesToFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase());
    })
      if (moviesFilteredByValue.length === 0) {
        setMoviesNotFound(true);
      } else {
        setMoviesNotFound(false);
      }
      return moviesFilteredByValue;
  };

  useEffect(() => {
    const filteredSaved = handleFilter(savedMovies, savedInputValue, isShortMovies);
    setSavedMoviesToShow(filteredSaved);
  }, [savedMovies, savedInputValue, isShortMovies]);

  return (
    <div className="SavedMovies">
      <SearchForm 
      handleSearch={handleSearch}
      handleCheckBox={handleCheckBox}
      savedMoviesToShow={savedMoviesToShow}
      />
      <MoviesCardList 
      savedMoviesToShow={savedMoviesToShow}
      saveMovie={saveMovie}
      deleteMovie={deleteMovie}
      savedMovies={savedMovies}
      moviesNotFound={moviesNotFound}
      />
    </div>
  )
}

export default SavedMovies;