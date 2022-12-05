import React from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";


function Movies() {
  return (
    <div className=" Movies">
      <SearchForm />
      <Preloader />
    </div>
  )
}

export default Movies;