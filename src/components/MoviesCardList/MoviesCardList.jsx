import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ moviesToShow, moviesNotFound, errorMessage, hiddenMovies, handleLoadMoreMovies }) {
  const location = useLocation();
  const moviesError = moviesNotFound ? "Ничего не найдено" : errorMessage;

  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container">
        <p className="MoviesCardList__notFound">{moviesError}</p>
        {moviesToShow?.map((movie) => {
          return (
          <MoviesCard 
            movie={movie}
            key={movie._id || movie.id}
          />
          )
        })}
        {
          location.pathname === '/movies' && hiddenMovies ? 
          <button type="button" className="MoviesCardList__btn" onClick={handleLoadMoreMovies}>Ещё</button> : null
        }
        
      </div>
    </section>
  )
}

export default MoviesCardList;