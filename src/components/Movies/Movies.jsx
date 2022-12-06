import React from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";


function Movies() {
  return (
    <div className=" Movies">
      <SearchForm />
      <MoviesCard />
      {/* <Preloader /> */}
    </div>
  )
}

export default Movies;