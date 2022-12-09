import React from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies() {
  return (
    <div className=" Movies">
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </div>
  )
}

export default Movies;