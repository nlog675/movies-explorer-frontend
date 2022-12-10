import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({movie}) {
  const location = useLocation();

  return (
    <div className="MoviesCard__container">
      <div className="MoviesCard__about">
        <h2 className="MoviesCard__title">{movie.title}</h2>
        <p className="MoviesCard__duration">{movie.duration}</p>
        {
          location.pathname === '/movies' ? (
            <button type="button" className="MoviesCard__btn"></button>
          ) : (
            <button type="button" className="MoviesCard__btn-delete"></button>
          )
        }
      </div>
      <img className="MoviesCard__image" src={movie.image} alt="Обложка фильма" />
    </div>
  )
}

export default MoviesCard;