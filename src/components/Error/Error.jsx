import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error">
      <div className="Error__container">
        <h2 className="Error__code">
          404
        </h2>
        <p className="Error__text">
          Страница не найдена
        </p>
        <Link className="Error__link" to="/">
          Назад
        </Link>
      </div>
    </div>
  )
}

export default Error;