import './ExpenseForm.css'
import React,{useState} from 'react'
const ExpenseForm=(props)=>{
  // single state is not better than multiple state

  // EXAMPLE OF SINGLE STATE  
  // const [gettInput,SetInput]=useState({
  //   enterTitle:'',
  //   enterAmount:'',
  //   enterDate:'',
  // })
  // const titlechange=(event)=>{
  //  getInput({
  //     ...getInput,
  //     enterTitle:event.target.value
  // })
  // }
  // const amountchange=(event)=>
  // {
  //  
  // }
  // const datechange=(event)=>
  // {
  //   
  // }

  // when we have to update a state and it is depenedent on the previous state
  // the syntax loo like
  // setInput(prevState=>{
  //   return{
  //     ...prevState,
  //     enterTitle:event.target.value
  //   }
  // })
  
  const [enterTitle,setTitle]=useState('')
  const [enterAmount,setAmount]=useState('')
  const [enterDate,setDate]=useState('')
  const titlechange=(event)=>{
    setTitle(event.target.value);
  }
  const amountchange=(event)=>
  {
    setAmount(event.target.value)
  }
  const datechange=(event)=>
  {
    setDate(event.target.value)
  }
  const formSubmit=(e)=>{
    // to stop browser from reloading
    e.preventDefault()
    const expenseData={
      title:enterTitle,
      amount:enterAmount,
      date:new Date(enterDate)
    }
    props.onSaveExpenseData(expenseData)
    setTitle('')
    setDate('')
    setAmount('')
    // console.log(expenseData);
    
  }
  return(
    // 2 way binding mtlb ham event ko listen bhi kara rhe and usme sath sath 
    // value bhi change kara rhe
    <div>
        <form onSubmit={formSubmit}>
      <div class="controls">
      
         <div class="control">
        <label>Title</label>
        <input type='Text'
          value={enterTitle}
         onChange={titlechange}>
        </input>
      </div>

      
      <div class="control">
        <label>Amount</label>
        <input type='number'
        value={enterAmount}
        min="0.01" step="0.01" onChange={amountchange}></input>
      </div>

      
      <div class="control">
        <label>Date</label>
        <input type='date' 
        value={enterDate}
        min="2019-01-01"
        onChange={datechange}
        ></input>
      </div>

      
      <div class="action">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
      
      </div>  
      </form>
    </div>
  )
}
export default ExpenseForm