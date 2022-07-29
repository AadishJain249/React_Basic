import './CourseItem.css'
const CourseItem=(props)=>{
  return(
    <li className='goal-item'>{props.children}</li>
  )
}
export default CourseItem