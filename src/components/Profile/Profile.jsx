import { useEffect, useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Profile({ onLogout, handleEditProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation();

  const isChanged = (e) => {
    e.preventDefault();
    if (values.name !== currentUser.name || values.email !== currentUser.email) {
      handleEditProfile(values);
    }
  };

  useEffect(() => {
    resetForm(currentUser)
  }, [currentUser, resetForm]);

  return (
    <div className="Profile">
      <div className="Profile__container">
        <h2 className="Profile__greeting">{`Привет, ${currentUser.name}!`}</h2>
        <form className="Profile__form" noValidate>
          <span className="Profile__error Profile__error-name">{errors.name}</span>
          <label htmlFor="profile-name" className="Profile__label">
            <span className="Profile__span">Имя</span>
            <input 
              className="Profile__input" 
              type="text" 
              name="name" 
              id="profile-name"
              value={values.name || ''}
              minLength='2'
              onChange={handleChange}
            />
          </label>
          <label htmlFor="profile-email" className="Profile__label">
            <span className="Profile__span">E-mail</span>
            <input 
              className="Profile__input"
              type="email"
              name="email"
              id="profile-email"
              value={values.email || ''}
              onChange={handleChange}
            />
          </label>
          <span className="Profile__error Profile__error-email">{errors.email}</span>
          <div className="Profile__buttons">
            <button type="button" className="Profile__edit" disabled={!isValid} onClick={isChanged}>Редактировать</button>
            <button type="button" className="Profile__exit" onClick={onLogout}>Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile;