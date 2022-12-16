import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="Error">
      <div className="Error__container">
        <h2 className="Error__code">
          404
        </h2>
        <p className="Error__text">
          Страница не найдена
        </p>
        <Link className="Error__link" onClick={() => {navigate(-1)}}>
          Назад
        </Link>
      </div>
    </div>
  )
}

export default Error;