import React from "react";
import Section from "../Section/Section";
import photo from "../../images/my-photo.jpg";

function AboutMe({id}) {
  return (
    <Section title="Студент" id={id}>
      <div className="AboutMe">
        <div className="AboutMe__text">
          <h2 className="AboutMe__name">Никита</h2>
          <h3 className="AboutMe__details">Фронтенд-разработчик, 28 лет</h3>
          <p className="AboutMe__bio">Я родился и живу в городе Орёл. Закончил факультет преподавания иностранных языков ОГУ. Люблю путешествовать, смотреть кино и играть в Xbox. Недавно начал изучать веб-разработку, планирую с головой окунуться в эту сферу!</p>
          <a className="AboutMe__link" target="blank" href="https://github.com/nlog675">Github</a>
        </div>
        <img className="AboutMe__photo" src={photo} alt="мое фото"/>
      </div>
    </Section>
  )
}

export default AboutMe; 