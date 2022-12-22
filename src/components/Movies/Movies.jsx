import React from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";


function Movies({movies}) {
  const [onLoad, setOnLoad] = useState(false)

  return (
    <div className="Movies">
      <SearchForm />
      {
        !onLoad ? (
          <MoviesCardList 
          movies={movies}
          />
        ) : (
          <Preloader />
        )
      }
    </div>
  )
}

export default Movies;