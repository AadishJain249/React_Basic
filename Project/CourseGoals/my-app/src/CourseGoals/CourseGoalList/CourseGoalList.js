import './CourseGoalList.css'
import CourseItem from '../CourseItem/CourseItem'
// const CourseGoalList=(prop)=>{
// return (
//   <ul className='goal-list'>
//     {
//       prop.items.map(goal=>(
//         <CourseItem
//         key={goal.id}
//         id={goal.id}
//         >
//         {goal.text}
//         </CourseItem>
//     ))
//   }
//   </ul>

// )}
// export default CourseGoalList;
const CourseGoalList=(props)=>{
  return(
    <ul className='goal-list'>
    {
    props.items.map(goal =>(
      <CourseItem 
      id={goal.id}
      key={goal.key}
      >
        {goal.text}
      </CourseItem>
    ))
    }
    </ul>
  )
}
export default CourseGoalList