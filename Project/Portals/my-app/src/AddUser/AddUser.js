import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'  
import ErrorModal from '../UI/ErrorModal';

import React, { useRef, useState } from 'react'
const AddUser =(props)=>{
  // const[getUserName,setUserName]=useState('')
  // const[getUserAge,setUserAge]=useState('')
  const [error, setError] = useState();
  const name=useRef()
  const age=useRef()
  // const ageHandler=(event)=>{
  //   setUserAge(event.target.value)
  // }
  // const nameHandler=(event)=>{
  //   setUserName(event.target.value)
  // }
  
  
  const AddUserHandler=(event)=>{
    event.preventDefault()
    const addName=name.current.value
    const addAge=age.current.value
    props.onAddUser(addName,addAge)
    if(addName.trim().length===0)
    {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if(addAge.trim().length===0)
    {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    
    if(addAge<0)
    {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });  
    return;  
    }
    console.log(addName,addAge);
    name.current.value=''
    age.current.value=''
    
 }
 const errorHandler = () => {
  setError(null);
};

  return(
    <React.Fragment>
    {/* <ErrorModal title="An error occured!" message="Something went wrong!" /> */}
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
      <label id="Name">Name</label>
      <input 
      id="name" 
      type="text" 
      ref={name}/>
      
      <label id="Age">Age(years)</label>
      <input id="age" 
      ref={age}
      type="number"/>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </React.Fragment>
    
  )
}
export default AddUser