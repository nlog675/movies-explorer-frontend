import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <p className="Footer__caption">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="Footer__social">
          <p className="Footer__social-copy">&copy; 2022</p>
          <ul className="Footer__social-links">
            <li className="Footer__social-item">
              <a className="Footer__social-link" href="https://practicum.yandex.ru/">
              Яндекс.Практикум
              </a>
            </li>
            <li className="Footer__social-item">
              <a className="Footer__social-link" href="https://github.com/nlog675">
              Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer;