function Popup({Component, title, submitButton, cancelBtn }) {
  return (
    <div className='popup'>
      <div className="popup__container">
        <div className="popup__top">
          <h2 className='popup__title'>{title}</h2>
          <button className='popup__close-btn' />
        </div>
        {<Component />}
        <div className="popup__bottom">
          {cancelBtn && <button className="button popup__button_place_popup" type="submit">{cancelBtn}</button>}
          <button className="button" type="button">{submitButton}</button>
        </div>
      </div>
    </div>
  )
}

export default Popup;