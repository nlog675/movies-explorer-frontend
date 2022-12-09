import React from "react";

function Section({ title, children, id }) {
  return (
    <section className={title === 'Технологии' ? 'Techs__bgc' : 'Section'} id={id}>
      <div className="Section__container">
        <h2 className="Section__title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section;