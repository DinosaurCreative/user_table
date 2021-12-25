function Form() {
  return (
    <form className="form">
      <div className="form__input-container">
        <span className="form__span" >Фамилия</span>
        <input className="form__input" type='text' placeholder="Введите фамилию"></input>
      </div>      
      <div className="form__input-container">
        <span className="form__span">Имя</span>
        <input className="form__input" type='text' placeholder="Введите имя"></input>
      </div>      
      <div className="form__input-container">
        <span className="form__span">Отчество</span>
        <input className="form__input" type='text' placeholder="Введите отчество"></input>
      </div>      
      <div className="form__input-container">
        <span className="form__span">E-mail</span>
        <input className="form__input" type='email' placeholder="Введите электронную почту"></input>
      </div>      
      <div className="form__input-container">
        <span className="form__span">Логин</span>
        <input className="form__input" type='text' placeholder="Введите логин"></input>
      </div>     
    </form>
  )
}

export default Form;