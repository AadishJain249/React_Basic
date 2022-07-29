import style from 'styled-components'
// import './CourseInput.css';
import React,{useState} from 'react';
import Button from '../../Button/Button'
// const CourseInput=(props)=>
// {
//   // getinput meri starting value hai
//   const[getInput,setInput]=useState('')
//   const inputHandler=(e)=>{
//     setInput(e.target.value)
//   }
//   const formSubmit=(e)=>{
//     e.preventDefault()
//     props.onAddGoal(getInput)
//   }

// return(
//   <form onSubmit={formSubmit}>
//     <div className="form-control">
//       <label typeof='text'></label>
//       <input type='text' onChange={inputHandler}></input>
//       </div>
//       
//   </form>
// )
// }
// 

const FormControl=style.div`

  margin: 0.5rem 0;
  
  & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props=>(
    props.invalid?'red':'blue'
  )};
  background:${props=>(
    props.isvalid?'salmon':'transparent'
  )}
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

& invalid input {
  background-color: salmon;
  border-color: red;
}

& invalid label {
  color: red;
}
@media(min-width:750px)
{
  width:auto
}
`
const CourseInput=(props)=>{
  const [getInput,setInput]=useState('')
  const [isValid,setValid]=useState(true)
  const inputHandler=(event)=>{
    if(event.target.value.trim().length>0)
    {
      setValid(true)
    }
    setInput(event.target.value)
  }
  const submitForm=(event)=>{
    event.preventDefault()
    if(getInput.trim().length===0)
    {
      setValid(false)
      return
    }
    props.onAddGoal(getInput)
  }
  return (
    <form onSubmit={submitForm}>
       <FormControl invalid={!isValid}>
    <label style={{color:!isValid ?'red':'black'}}>CourseGoal</label>
    <input type='text' onChange={inputHandler}></input>
    </FormControl>
    <Button type="submit">Add Goal</Button>
    </form>
  )
}
export default CourseInput