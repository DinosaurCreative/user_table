import './App.css';
import Table from '../Table/Table';
import Header from '../Header/Header';
import Popup from '../Popup/Popup'
import Form from '../Form/Form';
import { 
  createUser,
  changeUserInfo,
  deleteUser,
  deleteBtn,
  cancelBtn,  
  saveBtn,
  deleteValidation,
  createBtn
} from '../../utils/constants';

function App() {
  function confirmUserDelete () {
    return <h3 className='popup__delete-user'>{deleteValidation}</h3>;
  }

  return (
    <div className='app'>
      <Header />
      <Table />
      {/* <Popup Component = {() => confirmUserDelete()}
             title = {createUser}
             submitButton = {saveBtn}
             cancelBtn = {cancelBtn}
             /> */}
      <Popup Component = {Form}
             title = {createUser}
             submitButton = {createBtn}
             />
      {/* <Popup Component = {Form}
             title = {changeUserInfo}
             submitButton = {saveBtn}
             /> */}
    </div>
  );
}

export default App;
