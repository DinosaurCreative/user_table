import TableRow from '../TableRow/TableRow';
import { users } from '../../utils/constants';
function Table () {
  return (
    <div className='table'>
      <div className='table__header-container'>
        <h2 className='table__header'>Пользователи</h2>
        <button className='button' type='button'><span className='button_place_table'>+</span>  Добавить</button>
      </div>
      <div className='table__titles'>
        <p className='table__column-title'>Фамилия</p>
        <p className='table__column-title'>Имя</p>
        <p className='table__column-title'>Отчество</p>
        <p className='table__column-title'>E-mail</p>
        <p className='table__column-title'>Логин</p>
      </div>
    <ul className='table__user-list'>{
      users.map(item => {
        return <TableRow users = {item}
                         key = {item._id}/>
      }) 
    }</ul>
    </div>
  );
}

export default Table;