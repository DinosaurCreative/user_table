function Form({recordValueHandler, user }) {
  return (
    <form className="form">
      <div className="form__input-container">
        <span className="form__span" >Фамилия</span>
        <input className="form__input" type='text' placeholder="Введите фамилию" required name='lastName' onChange={recordValueHandler} value={user.lastName}/>
      </div>      
      <div className="form__input-container">
        <span className="form__span">Имя</span>
        <input className="form__input" type='text' placeholder="Введите имя"  name='firstName' onChange={recordValueHandler} value={user.firstName}/>
      </div>      
      <div className="form__input-container">
        <span className="form__span">Отчество</span>
        <input className="form__input" type='text' placeholder="Введите отчество"  name='middleName' onChange={recordValueHandler} value={user.middleName}/>
      </div>      
      <div className="form__input-container">
        <span className="form__span">E-mail</span>
        <input className="form__input" type='email' placeholder="Введите электронную почту"  name='email' onChange={recordValueHandler} value={user.email}/>
      </div>      
      <div className="form__input-container">
        <span className="form__span">Логин</span>
        <input className="form__input" type='text' placeholder="Введите логин"  name='login' onChange={recordValueHandler} value={user.login}/>
      </div>     
    </form>
  )
}

export default Form;