import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { DESKTOP_RESOLUTION, MOBILE_RESOLUTION, SHORT_FILMS_DURATION } from "../../utils/constants";

function Movies({ 
  savedMovies, 
  saveMovie, 
  deleteMovie, 
  setIsInfoTooltipOpen, 
  setNegativeResultText 
}) {
  const resolution = document.documentElement.clientWidth;
  const [onLoad, setOnLoad] = useState(false);
  const [betFilms, setBetFilms] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [hiddenMovies, setHiddenMovies] = useState(false);
  const [additionalMovies, setAdditionalMovies] = useState(0);
  const [preloadedMovies, setPreloadedMovies] = useState(0);

  const handleCheckBox = () => {
    setIsShortMovies(!isShortMovies);
    localStorage.setItem('isShortMovies', !isShortMovies);
  }

  const handleFilter = (movies, inputValue, isShortMovies) => {
    let moviesToFilter = movies;
    let moviesFilteredByValue;
    if (isShortMovies) {
      moviesToFilter = moviesToFilter.filter((movie) => movie.duration < SHORT_FILMS_DURATION);
    }
    moviesFilteredByValue = moviesToFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase());
    })
      if (moviesFilteredByValue.length === 0) {
        setMoviesNotFound(true)
      } else {
        setMoviesNotFound(false);
      }
      return moviesFilteredByValue;
  }
  
  const handleSearch = (inputValue) => {
    setOnLoad(true);
    setIsShortMovies(isShortMovies);
    setInputValue(inputValue);

    const localBetFilms = JSON.parse(localStorage.getItem('betFilms'));
    if (!localBetFilms) {
      moviesApi.getMovies()
        .then((movies) => {
        setBetFilms(movies);
        localStorage.setItem('betFilms', JSON.stringify(movies));
      })
      .catch(() => {
        setNegativeResultText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        setIsInfoTooltipOpen(true);
        })
        .finally(() => {
          setOnLoad(false);
        });
      } else {
        setBetFilms(localBetFilms);
        setOnLoad(false);
        }
  };

  useEffect(() => {
    if (localStorage.getItem('isShortMovies') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('filteredMovies')) {
      const searched = JSON.parse(localStorage.getItem('filteredMovies'))
      const filteredMovies = handleFilter(searched, inputValue, isShortMovies);
      setFilteredMovies(filteredMovies)
    }
  }, [inputValue, isShortMovies]);

  useEffect(() => {
    if (betFilms.length === 0) {
      return
    } else {
      const filtered = handleFilter(betFilms, inputValue, isShortMovies);
      setFilteredMovies(filtered);
      
      localStorage.setItem('filteredMovies', JSON.stringify(filtered));
      localStorage.setItem('isShortMovies', isShortMovies);
      localStorage.setItem('inputValue', inputValue);
    }
  }, [betFilms, inputValue, isShortMovies]);

  useEffect(() => {
      if (filteredMovies.length > preloadedMovies) {
        setMoviesToShow(filteredMovies.slice(0, preloadedMovies));
        setHiddenMovies(true);
      } else {
        setMoviesToShow(filteredMovies);
        setHiddenMovies(false);
      }
  }, [filteredMovies, preloadedMovies]);

  useEffect(() => {
    if (resolution >= DESKTOP_RESOLUTION || resolution < DESKTOP_RESOLUTION) {
      setAdditionalMovies(7)
      setPreloadedMovies(7);
    }
    if (resolution <= MOBILE_RESOLUTION) {
      setAdditionalMovies(5);
      setPreloadedMovies(5);
    }
  }, [resolution]);

  const handleLoadMoreMovies = () => {
    setMoviesToShow((moviesToShow) =>
    filteredMovies.slice(0, moviesToShow.length + additionalMovies)
  );
  };

  useEffect(() => {
    if (moviesToShow.length === filteredMovies.length) {
      setHiddenMovies(false)
    }
  }, [moviesToShow, filteredMovies]);

  return (
    <div className="Movies">
      <SearchForm 
      handleSearch={handleSearch}
      handleCheckBox={handleCheckBox}
      isShortMovies={isShortMovies}
      />
      {
        !onLoad ? (
          <MoviesCardList 
          moviesToShow={moviesToShow}
          moviesNotFound={moviesNotFound}
          hiddenMovies={hiddenMovies}
          handleLoadMoreMovies={handleLoadMoreMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          savedMovies={savedMovies}
          />
        ) : (
          <Preloader />
        )
      }
    </div>
  )
}

export default Movies;