import React from "react";
import Section from "../Section/Section";

function Techs({id}) {
  return (
    <Section title="Технологии" id={id}>
      <div className="Techs">
      <h2 className="Techs__title">
        7 технологий
      </h2>
      <p className="Techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="Techs__stack">
        <li className="Techs__item">
          <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics" target="blank" className="Techs__button">HTML</a>
        </li>
        <li className="Techs__item">
          <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics" target="blank" className="Techs__button">CSS</a>
        </li>
        <li className="Techs__item">
          <a href="https://learn.javascript.ru/" target="blank" className="Techs__button">JS</a>
        </li>
        <li className="Techs__item">
          <a href="https://ru.reactjs.org/" target="blank" className="Techs__button">React</a>
        </li>
        <li className="Techs__item">
          <a href="https://git-scm.com/" target="blank" className="Techs__button">Git</a>
        </li>
        <li className="Techs__item">
          <a href="https://expressjs.com/ru/" target="blank" className="Techs__button">Express.js</a>
        </li>
        <li className="Techs__item">
          <a href="https://www.mongodb.com/home" target="blank" className="Techs__button">mongoDB</a>
        </li>
      </ul>
      </div>
    </Section>
  )
}

export default Techs;