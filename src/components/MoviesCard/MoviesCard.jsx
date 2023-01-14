import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, saveMovie, deleteMovie, savedMovies }) {
  const URL = 'https://api.nomoreparties.co';
  const location = useLocation();
  const isSaved = savedMovies.some((m) => m.movieId === movie.id)
  
  const handleTransformDuration = (duration) => {
    if (duration > 60) {
      return `${Math.floor(duration / 60)} ч ${duration % 60} мин`
    } else {
      return `${duration % 60} мин`
    }
  };

  const handleLike = () => {
    if (isSaved) {
      const movieForDelete = savedMovies.find((m) => m.movieId === movie.id);
      deleteMovie(movieForDelete);
    } else {
      saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
    }
  };

  const handleDelete = () => {
    deleteMovie(movie);
  };

  return (
    <div className="MoviesCard">
      <div className="MoviesCard__container">
        <div className="MoviesCard__about">
          <h2 className="MoviesCard__title">{movie.nameRU}</h2>
          <p className="MoviesCard__duration">{handleTransformDuration(movie.duration)}</p>
          {
            location.pathname === '/movies' ? (
              <button type="button" className={`${isSaved
                 ? 'MoviesCard__btn_active' : 'MoviesCard__btn'}`} onClick={handleLike}></button>
            ) : (
              <button type="button" className="MoviesCard__btn-delete" onClick={handleDelete}></button>
            )
          }
        </div>
        <a className="MoviesCard__link" href={movie.trailerLink} target="blank">
          <img className="MoviesCard__image" src={location.pathname === '/saved-movies' ? movie.image : `${URL}${movie.image.url}`} alt="Обложка фильма" />
        </a>
      </div>
    </div>
  )
}

export default MoviesCard;