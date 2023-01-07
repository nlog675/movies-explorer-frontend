import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, saveMovie, deleteMovie }) {
  const location = useLocation();

  const handleTransformDuration = (duration) => {
    if (duration > 60) {
      return `${Math.floor(duration / 60)} ч ${duration % 60} мин`
    } else {
      return `${duration % 60} мин`
    }
  };



  return (
    <div className="MoviesCard">
      <a className="MoviesCard__link" href={movie.trailerLink} target="blank">
      <div className="MoviesCard__container">
        <div className="MoviesCard__about">
          <h2 className="MoviesCard__title">{movie.nameRU}</h2>
          <p className="MoviesCard__duration">{handleTransformDuration(movie.duration)}</p>
          {
            location.pathname === '/movies' ? (
              <button type="button" className="MoviesCard__btn" onClick={saveMovie}></button>
            ) : (
              <button type="button" className="MoviesCard__btn-delete" onClick={deleteMovie}></button>
            )
          }
        </div>
        <img className="MoviesCard__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt="Обложка фильма" />
      </div>
      </a>
    </div>
  )
}

export default MoviesCard;