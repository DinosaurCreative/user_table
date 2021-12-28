import { useEffect, useState } from "react";

function Popup({ 
  isPopupOpened,
  title,
  popupVisibilityHandler,
  cancelBtn,
  recordValueHandler,
  user,
  Component,
  submitHandler,
  submitButton,
  setCurrentPopup,
  currentPopup }) {
  
  const [ formValidity, setFormValidity ] = useState({
    firstNameValid: false,
    middleNameValid: false,
    lastNameValid: false,
    emailValid: false,
    loginValid: false,
  });

  function closePopupsHandler() {
    popupVisibilityHandler(false);
    setCurrentPopup('');
  };

  useEffect(() => {
    if (currentPopup === 'Редактирование пользователя' || currentPopup === 'Создание пользователя') {
      console.log(12)
      setFormValidity({
        firstNameValid: user.firstName.length > 0,
        lastNameValid: user.lastName.length > 0,
        middleNameValid: user.middleName.length > 0,
        emailValid: user.email.length > 0,
        loginValid: user.login.length > 0,
      })
    }
  },[user, currentPopup]);

  const isSubmitDisabled = formValidity.firstNameValid && formValidity.middleNameValid && formValidity.lastNameValid &&formValidity.emailValid && formValidity.loginValid;

  return (
    <div className={`popup ${isPopupOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__top">
          <h2 className='popup__title'>{title}</h2>
          {!cancelBtn && <button className='popup__close-btn' onClick={closePopupsHandler}/>}
        </div>
        {<Component  recordValueHandler = {recordValueHandler}
                           user = {user}
                           />}
        <div className="popup__bottom">
          {cancelBtn && <button className="button popup__button_place_popup" type="submit" onClick={()=> popupVisibilityHandler(false)}>{cancelBtn}</button>}
          {cancelBtn && <button className='button' type="button" name='submitButton' onClick={submitHandler}>{submitButton}</button>}
          {!cancelBtn && <button className={isSubmitDisabled ? 'button' : 'button button_type_disabled'} disabled={!isSubmitDisabled} type="button" name='submitButton' onClick={submitHandler}>{submitButton}</button>}
        </div>
      </div>
    </div>
  );
};

export default Popup;