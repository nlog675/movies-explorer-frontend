import React from "react";

function MoviesCard({movie}) {
  return (
    <div className="MoviesCard__container">
      <div className="MoviesCard__about">
        <h2 className="MoviesCard__title">{movie.title}</h2>
        <p className="MoviesCard__duration">{movie.duration}</p>
        <button type="button" className="MoviesCard__btn"></button>
      </div>
      <img className="MoviesCard__image" src={movie.image} alt="Обложка фильма" />
    </div>
  )
}

export default MoviesCard;