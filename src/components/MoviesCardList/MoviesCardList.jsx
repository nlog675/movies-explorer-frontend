import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ 
  moviesToShow, 
  moviesNotFound,
  hiddenMovies, 
  handleLoadMoreMovies, 
  saveMovie,
  deleteMovie,
  savedMoviesToShow,
  savedMovies,
}) {
  const location = useLocation();
  const moviesError = "Ничего не найдено";


  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container">
        {moviesNotFound ? <p className="MoviesCardList__notFound">{moviesError}</p> : null}
        {location.pathname === '/saved-movies' ? (
          savedMoviesToShow?.map((movie) => {
            return (
              <MoviesCard 
            movie={movie}
            key={movie.movieId}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            savedMovies={savedMovies}
          />
            )
          })
        ) : (moviesToShow?.map((movie) => {
          return (
          <MoviesCard 
            movie={movie}
            key={location.pathname === '/saved-movies' ? movie._id : movie.id}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            savedMovies={savedMovies}
          />
          )
        }))}
        {
          location.pathname === '/movies' && hiddenMovies ? 
          <button type="button" className="MoviesCardList__btn" onClick={handleLoadMoreMovies}>Ещё</button> : null
        }
      </div>
    </section>
  )
}

export default MoviesCardList;