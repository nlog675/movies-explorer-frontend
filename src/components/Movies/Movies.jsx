import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { moviesApi } from "../../utils/MoviesApi";

function Movies() {
  const viewport = document.documentElement.clientWidth;
  const [onLoad, setOnLoad] = useState(false);
  const [betFilms, setBetFilms] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [hiddenMovies, setHiddenMovies] = useState(false);
  const [additionalMovies, setAdditionalMovies] = useState(0);
  const [preloadedMovies, setPreloadedMovies] = useState(0);

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
        setMoviesNotFound(true)
      }
      return moviesFilteredByValue;
      
  }
  
  const handleSearch = (inputValue, isShortMovies) => {
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
        setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        })
        .finally(() => {
          setOnLoad(false);
        });
      } else {
        setBetFilms(localBetFilms);
        setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
          setOnLoad(false);
        }
  };

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
    if (viewport >= 1280 || viewport < 1280) {
      setAdditionalMovies(7)
      setPreloadedMovies(7);
    }
    if (viewport <= 480) {
      setAdditionalMovies(5);
      setPreloadedMovies(5);
    }
  }, [viewport]);

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
      />
      {
        !onLoad ? (
          <MoviesCardList 
          moviesToShow={moviesToShow}
          moviesNotFound={moviesNotFound}
          hiddenMovies={hiddenMovies}
          handleLoadMoreMovies={handleLoadMoreMovies}
          />
        ) : (
          <Preloader />
        )
      }
    </div>
  )
}

export default Movies;