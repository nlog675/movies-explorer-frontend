import React from "react";
import moviesImg from "../../images/movies-img.png"

function MoviesCard() {
  return (
    <div className="MoviesCard__container">
      <div className="MoviesCard__about">
        <h2 className="MoviesCard__title">33 слова о дизайне</h2>
        <p className="MoviesCard__duration">1ч 42м</p>
        <button type="button" className="MoviesCard__btn"></button>
      </div>
      <img className="MoviesCard__image" src={moviesImg} alt="Обложка фильма" />
    </div>
  )
}

export default MoviesCard;