import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";

function Movies() {
  const resolution = document.documentElement.clientWidth;
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
  const [savedMovies, setSavedMovies] = useState([]);

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

  // const saveMovie = (movie) => {
  //   debugger
  //   // const isMovieSaved = savedMovies.find((isMovieSaved) => isMovieSaved._id.toString() === movie._id)
  //   // if (!isMovieSaved) {
  //     console.log(movie);
  //     mainApi.addMovie(movie)
  //       .then((savedMovie) => {
  //         setSavedMovies([savedMovie, ...savedMovies])
  //       })
  //       .catch((err) => console.log(err))
  //   // }
  //   // deleteMovie(isMovieSaved);
  // }

  // const deleteMovie = (isMovieSaved) => {
  //   // const movie = betFilms.find((movie) => movie.id === isMovieSaved.id.toString())
  //   mainApi.deleteMovie(isMovieSaved._id)
  //     .then(() => {
  //       setSavedMovies((state) => state.filter((m) => m._id !== isMovieSaved._id));
  //     })
  //     .catch((err) => console.log(err))
  // }

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
    if (resolution >= 1280 || resolution < 1280) {
      setAdditionalMovies(7)
      setPreloadedMovies(7);
    }
    if (resolution <= 480) {
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
      />
      {
        !onLoad ? (
          <MoviesCardList 
          moviesToShow={moviesToShow}
          moviesNotFound={moviesNotFound}
          hiddenMovies={hiddenMovies}
          handleLoadMoreMovies={handleLoadMoreMovies}
          // saveMovie={saveMovie}
          // deleteMovie={deleteMovie}
          />
        ) : (
          <Preloader />
        )
      }
    </div>
  )
}

export default Movies;