import React from "react";
import Section from "../Section/Section";

function Techs() {
  return (
    <Section title='Технологии'>
      <h2 className="Techs__title">
        7 технологий
      </h2>
      <p className="Techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="Techs__stack">
        <li className="Techs__item">
          <button type="button" className="Techs__button">HTML</button>
        </li>
        <li className="Techs__item">
          <button type="button" className="Techs__button">CSS</button>
        </li>
        <li className="Techs__item">
          <button type="button" className="Techs__button">JS</button>
        </li>
        <li className="Techs__item">
          <button type="button" className="Techs__button">React</button>
        </li>
        <li className="Techs__item">
          <button type="button" className="Techs__button">Git</button>
        </li>
        <li className="Techs__item">
          <button type="button" className="Techs__button">Express.js</button>
        </li>
        <li className="Techs__item">
          <button type="button" className="Techs__button">mongoDB</button>
        </li>
      </ul>
    </Section>
  )
}

export default Techs;