function TableRow ({ users, _, deletePopupSetter, chagePopupOpenSetter, fillFormImputsHandler, setCurrentPopup, changeUserInfo }) {
  function changeUserHandler() {
    chagePopupOpenSetter(true);
    fillFormImputsHandler(users);
    setCurrentPopup(changeUserInfo);
  };

  function deleteUserHandler(){
    deletePopupSetter(true);
    fillFormImputsHandler(users);
  };
   
  return (
    <li className='tableRow'>
      <p className='tableRow__parametr' name='firstName'>{users.firstName}</p>
      <p className='tableRow__parametr' name='lastName'>{users.lastName}</p>
      <p className='tableRow__parametr' name='middleName'>{users.middleName}</p>
      <p className='tableRow__parametr' name='email'>{users.email}</p>
      <p className='tableRow__parametr' name='login'>{users.login}</p>
      <div className='tableRow__buttons-container'>
        <button className='tableRow__button tableRow__button_type_change' type='button' onClick={changeUserHandler}></button>
        <button className='tableRow__button tableRow__button_type_delete' type='button' onClick={deleteUserHandler}></button>
      </div>
    </li>
  )
};

export default TableRow;