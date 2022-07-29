import React,{useState} from "react";
import ExpenseRender from "./components/Expenses/ExpenseRender";
import NewExpense from "./components/NewExpenses/NewExpenses";
const Dummy=[
  {
    id:1,
    title:"Car",
    date:new Date(2022,6,20),
    amount:10000000
  },
  {
    id:2,
    title:"Bike",
    date:new Date(2022,6,21),
    amount:1000000
  },
  {
    id:3,
    title:"Laptop",
    date:new Date(2019,6,22),
    amount:100000
  },
  {
    id:4,
    title:"Guitar",
    date:new Date(2020,6,23),
    amount:5000
  },
  
]
function App() {
  const[expenses,setExpenses] =useState(Dummy)
  const addExpense=(expense)=>{
    // console.log('app js');
    // console.log(expense);
    
    setExpenses((prevExpense)=>{
      return [expense,...prevExpense]
    })
  }
  return (
    <div>
    
    <NewExpense onAddExpense={addExpense}/>
      <ExpenseRender item={expenses}/>
      </div>
  )



}
export default App;