import './ExpenseList.css'
import ExpenseItem  from './ExpenseItem'
const ExpenseList =(props)=>{
  const expenseLength=props.item.length
  if(expenseLength===0)
  {
    return <h2 className='expense-list-fall'>Data Not Found</h2>
  }
  return <ul className='expense-list'>
    {
    props.item.map((expense) => <ExpenseItem 
    key={expense.id}
    title={expense.title}
    date={expense.date}
    amount={expense.amount}/>)
    }
  </ul>

}

export default ExpenseList