import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onLogout, handleEditProfile }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="Profile">
      <div className="Profile__container">
        <h2 className="Profile__greeting">{`Привет, ${currentUser.name}!`}</h2>
        <form className="Profile__form">
          <label htmlFor="profile-name" className="Profile__label">
            <span className="Profile__span">Имя</span>
            <input 
              className="Profile__input" 
              type="text" 
              name="profile-name" 
              id="profile-name"
              value={`${currentUser.name}`}
              readOnly
            />
          </label>
          <label htmlFor="profile-email" className="Profile__label">
            <span className="Profile__span">E-mail</span>
            <input 
              className="Profile__input"
              type="text"
              name="profile-email"
              id="profile-email"
              value={`${currentUser.email}`}
              readOnly
            />
          </label>
          <div className="Profile__buttons">
            <button type="button" className="Profile__edit">Редактировать</button>
            <button type="button" className="Profile__exit" onClick={onLogout}>Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile;