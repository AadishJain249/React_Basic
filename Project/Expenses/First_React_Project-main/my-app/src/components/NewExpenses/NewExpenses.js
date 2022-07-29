import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense=(props)=>{
  const SaveExpenseData=(enterExpenseData)=>{
    const expenseData={
      ...enterExpenseData,
      id:Math.random.toString()
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData)
    isSet(false)
  }
  const [isToBeSet,isSet]=useState(false)
  const isSetChangeHandler=()=>{
    isSet(true)
  }
  const stopEditing=()=>{
    isSet(false)
  }
  return <div className="new-expense">
    {!isToBeSet && <button onClick={isSetChangeHandler}>Add New Expense</button>}
    {isToBeSet && <ExpenseForm onSaveExpenseData={SaveExpenseData} onCancel={stopEditing}></ExpenseForm>}
  </div>
}
export default NewExpense