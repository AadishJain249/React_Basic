import { Fragment, useState } from 'react';
import AddUser from './AddUser/AddUser'
import UserList from './AddUser/UserList';

function App() {
  const[userList,setList]=useState([])  
  const AddUserHandler=(Name,Age)=>{
    setList((prevList)=>
    {

    
    return[
    ...prevList,
    {
      name:Name,  
      age:Age,
      id:Math.random().toString(),
    }
  ]
})
}


  return (
    <Fragment>
    <AddUser onAddUser={AddUserHandler}/>
    <UserList users={userList}/>
    </Fragment>
  )   
}

export default App;
