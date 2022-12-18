import React from "react";
import Section from "../Section/Section";

function AboutProject({id}) {
  return (
    <Section title="О проекте" id={id}>
      <div className="AboutProject">
        <div className="AboutProject__grid">
          <div className="AboutProject__phase">
            <h3 className="AboutProject__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="AboutProject__text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="AboutProject__length">
            <h3 className="AboutProject__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="AboutProject__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="AboutProject__scale">
          <div className="AboutProject__scale-backend">
            <h3 className="AboutProject__scale-subtitle AboutProject__scale-subtitle_green">
              1 неделя
            </h3>
            <p className="AboutProject__scale-text">
              Back-end
            </p>
          </div>
          <div className="AboutProject__scale-frontend">
            <h3 className="AboutProject__scale-subtitle AboutProject__scale-subtitle_gray">
              4 недели
            </h3>
            <p className="AboutProject__scale-text">
              Front-end
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutProject;