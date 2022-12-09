import React from "react";
import {initialMovies} from "../../utils/initialMovies";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container">
        {initialMovies.map((data, index) => {
          return (
          <MoviesCard 
            movie={data}
            key={index}
          />
          )
        })}
      </div>
    </section>
  )
}

export default MoviesCardList;