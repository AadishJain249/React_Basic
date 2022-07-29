// component is just a function and return jsx
// one thing to be noticed we never call this function

// Functional components are some of the more common components that will come across
//  while working in React. These are simply JavaScript functions.
//  We can create a functional component to React by writing a JavaScript function.
//  These functions may or may not receive data as parameters. In the functional Components,
//  the return value is the JSX code to render to the DOM tree.

// UseState
// 2 parameter ek current state and ek updated state
// inital vale and updated value

import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
// import Card from './Card';
// will take only 1 parameter and react will decide the rest
function ExpenseItem(props) {

  // we have to use dyanmic placeholder {}
  // let title=props.title;

  // why we using const value becz const ki value to change nhi ho skti?
  // reason is we are not using = title ='';
  // we are telling react to manage it by calling useState
  //call a function we are not using = sign
  // how do we get new title value component function is reexecuted when state is updated
  const[title,setTitle]=useState(props.title)
  
  const click=()=>{
    //title='updated' why? cant we do this
    // reason is calling this function  setitle assign value and managed by react and we call this 
    // it receive new value and component function will be executed again because it is not executed
    // again if we want to change the value in components
    // [] are array destructing
    // har ek componate be khud ki state hoti hai thats why ek ki value 
    // change karne pe baki change nhi hote hai
    setTitle('Updated')
    console.log(title);
  }
    return (
      // this will not work because it must have only single rot element
      // how to solve this by wrapping up this in a single div
      <div class="item">
        <ExpenseDate date={props.date}/>
      
      <div class="desc">
        <h2>{title}</h2>
        <div class="price">{props.amount}$</div>
      </div>
      {/* react start event with on */}
      <button onClick={click}>Change</button>
      </div>
    )
    

}
export default ExpenseItem;