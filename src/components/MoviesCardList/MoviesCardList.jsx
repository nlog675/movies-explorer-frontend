import React from "react";
import {initialMovies} from "../../utils/initialMovies";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  console.log(movies);
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container">
        {movies.map((data) => {
          return (
          <MoviesCard 
            movie={data}
            key={data._id}
          />
          )
        })}
        <button type="button" className="MoviesCardList__btn">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;