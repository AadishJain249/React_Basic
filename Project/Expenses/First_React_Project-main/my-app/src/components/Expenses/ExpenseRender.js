// import React,{useState} from "react"
import ExpenseItem from "./ExpenseItem"
import './ExpenseRender.css'
import ExpenseFilter from './ExpenseFilter'
import React,{useState} from "react"
import ExpenseList from "./ExpenseList"
function ExpenseRender(props) {
  
  
  const [filterDate,selectData]=useState('2020')
  const filterchangeHandler=selectYear=>{
    selectData(selectYear)
}
const newArray=props.item.filter(expense=> {
  return expense.date.getFullYear().toString()===filterDate
})
  return (
     <div>
      <div className="expenses">
      <ExpenseFilter selected={filterDate} onfilterDate={filterchangeHandler}></ExpenseFilter>
      {

      }
      {/* {expenseLength} */}
      <ExpenseList item={newArray}/>
      </div >
      </div>
    )
   
}
export default ExpenseRender