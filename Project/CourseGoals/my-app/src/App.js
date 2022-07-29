import CourseInput from './CourseGoals/CourseInput/CourseInput';
import './App.css';
import React,{useState} from 'react';
import CourseGoalList from './CourseGoals/CourseGoalList/CourseGoalList';
// import CourseItem from './CourseGoals/CourseItem/CourseItem';

// const App=()=>{
//   const[initialGoals,setGoals]=useState([
//     {text:'1st course',id:1},
//     { text:'2nd course',id:2}
//   ])

//   const addGoalHandler=(enterText)=>{
//     setGoals(prevGoals=>{
//       const newGoal=[...prevGoals]
//       newGoal.unshift({text:enterText,id:Math.random().toString() })
//       return newGoal
//     })
//   }  
//   let content=(
//     <p>No more content to be added</p>
//   )
//   if(initialGoals.length>0)
//   {
//     content=(
//       <CourseGoalList items={initialGoals}></CourseGoalList>
//     )
//   }
//     return (
//       <div>
//       <section id='goal-form'>
//         <CourseInput onAddGoal={addGoalHandler}></CourseInput>
//       </section >
//       <section id='goals'>
//         {content}
//       </section>
//       </div>
//     )
//     }

const App=()=>{
  const [inState,setState]=useState([
    {text:'1st course',id:1},
    {text:'2nd course',id:2}
  ])  
  let content=<p>No more goals to be added</p>
  if(inState.length>0)
  {
    content=(<CourseGoalList items={inState}></CourseGoalList>)
    
  }
  const addHandler=(Text)=>{
    setState(prevGoals=>{
      const updatedGoal=[...prevGoals]
      updatedGoal.unshift({text:Text,id:Math.random.toString()})
      return updatedGoal
    })
  }
  return (
    <div>
    <section id='goal-form'>
      <CourseInput onAddGoal={addHandler}></CourseInput>
    </section>
    <section id='goals'>
      {content}
    </section>
    </div>
  )
}
export default App;
