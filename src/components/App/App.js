import './App.css';
import { useCallback, useState } from 'react';
import Table from '../Table/Table';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import Form from '../Form/Form';
import { 
  createUser,
  changeUserInfo,
  deleteUser,
  deleteBtn,
  cancelBtn,  
  saveBtn,
  deleteValidation,
  createBtn, 
  users,
  emptyUser
} from '../../utils/constants';

function App() {
  const [ usersData, setUsersData ] = useState(users);
  const [ isDeletePopupOpen, setIsDeletePopupOpen ] = useState(false);
  const [ isChangeUserPopupOpen, setIsChangeUserPopupOpen ] = useState(false);
  const [ isCreateUserPopupOpen, setIsCreateUserPopupOpen ] = useState(false);
  const [ user, setUser ] = useState(emptyUser);
  const [ currentPopup, setCurrentPopup ] = useState('');

  function confirmUserDelete () {
    return <h3 className='popup__delete-user'>{deleteValidation}</h3>
  };

  const userHandler = useCallback((e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  });

  function resetFormInputs() {
    fillFormImputsHandler(emptyUser);
  };

  function fillFormImputsHandler({ firstName, lastName, middleName, email, login, _id }) {
    setUser({ firstName, lastName, middleName, email, login, _id });
  };

  async function addUser(e) {
    await [e.preventDefault(), setUsersData([...usersData, user]), setIsCreateUserPopupOpen(false)];
    await resetFormInputs();
  };

  function changeUserInfoHandler() {
    const fixed = usersData.map(item => {
      if(item._id === user._id) {
        return user;
      }
      return item;
    })
    setUsersData(fixed);
    setIsChangeUserPopupOpen(false);
  };

  function deleteCurrentUser() {
    const deleted = usersData.filter(item => item._id !== user._id);
    setUsersData(deleted);
    setIsDeletePopupOpen(false);
  };
  
  return (
    <div className='app'>
      <Header />
      
      <Table deletePopupSetter = {setIsDeletePopupOpen}
             createPopupOpenSetter = {setIsCreateUserPopupOpen}
             chagePopupOpenSetter = {setIsChangeUserPopupOpen}
             usersData = {usersData}
             resetFormInputs = {resetFormInputs}
             fillFormImputsHandler = {fillFormImputsHandler}
             setCurrentPopup = {setCurrentPopup}
             createUser = {createUser}
             changeUserInfo = {changeUserInfo}
             />
      
      <Popup Component = {Form}
             title = {createUser}
             submitButton = {createBtn}
             isPopupOpened = {isCreateUserPopupOpen}
             popupVisibilityHandler = {setIsCreateUserPopupOpen}
             recordValueHandler = {userHandler} 
             user = {user}
             submitHandler = {addUser}
             popupName = {createUser}
             setCurrentPopup = {setCurrentPopup}
             currentPopup = {currentPopup}
             />
      
      <Popup Component = {() => confirmUserDelete()}
             title = {deleteUser}
             submitButton = {deleteBtn}
             cancelBtn = {cancelBtn}
             isPopupOpened = {isDeletePopupOpen}
             submitHandler = {deleteCurrentUser}
             popupVisibilityHandler = {setIsDeletePopupOpen}
             />
      
      <Popup Component = {Form}
             title = {changeUserInfo}
             submitButton = {saveBtn}
             isPopupOpened = {isChangeUserPopupOpen}
             popupVisibilityHandler = {setIsChangeUserPopupOpen}
             recordValueHandler = {userHandler}
             user = {user}
             setUser = {fillFormImputsHandler}
             submitHandler = {changeUserInfoHandler}
             popupName = {changeUserInfo}
             changeUserInfo = {changeUserInfo}
             setCurrentPopup = {setCurrentPopup}
             currentPopup = {currentPopup}
             />
    </div>
  );
};

export default App;
