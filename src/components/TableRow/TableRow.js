function TableRow ({ users, _}) {
  return (
    <li className='tableRow'>
      <p className='tableRow__parametr' name='firstName'>{users.firstName}</p>
      <p className='tableRow__parametr' name='secondName'>{users.secondName}</p>
      <p className='tableRow__parametr' name='middleName'>{users.middleName}</p>
      <p className='tableRow__parametr' name='email'>{users.email}</p>
      <p className='tableRow__parametr' name='login'>{users.login}</p>
      <div className='tableRow__buttons-container'>
        <button className='tableRow__button tableRow__button_type_change' type='button'></button>
        <button className='tableRow__button tableRow__button_type_delete' type='button'></button>
      </div>
    </li>
  )
}

export default TableRow;