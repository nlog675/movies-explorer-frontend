import React from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <div className="SavedMovies">
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </div>
  )
}

export default SavedMovies;