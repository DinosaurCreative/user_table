import { changeUserInfo } from '../../utils/constants';
import TableRow from '../TableRow/TableRow';

function Table ({ createPopupOpenSetter, deletePopupSetter, chagePopupOpenSetter, usersData, fillFormImputsHandler, resetFormInputs, setCurrentPopup, createUser, changeUserInfo }) {
  function openPopup() {
    resetFormInputs();
    createPopupOpenSetter(true);
    setCurrentPopup(createUser);
  }
  return (
    <div className='table'>
      <div className='table__header-container'>
        <h2 className='table__header'>Пользователи</h2>
        <button className='button' type='button' onClick={openPopup}><span className='button_place_table'>+</span>  Добавить</button>
      </div>
      <div className='table__titles'>
        <p className='table__column-title'>Фамилия</p>
        <p className='table__column-title'>Имя</p>
        <p className='table__column-title'>Отчество</p>
        <p className='table__column-title'>E-mail</p>
        <p className='table__column-title'>Логин</p>
      </div>
    <ul className='table__user-list'>{
      usersData.map((item, index) => {
        return <TableRow users = {item}
                         key = {item._id ? item._id : index}
                         deletePopupSetter = {deletePopupSetter}
                         chagePopupOpenSetter = {chagePopupOpenSetter}
                         fillFormImputsHandler = {fillFormImputsHandler}
                         setCurrentPopup = {setCurrentPopup}
                         changeUserInfo = {changeUserInfo}
                         />
      }) 
    }</ul>
    </div>
  );
}

export default Table;