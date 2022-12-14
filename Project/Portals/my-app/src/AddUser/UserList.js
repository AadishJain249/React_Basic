import classes from './UserList.module.css'
import Card from '../UI/Card'
const UserList=(props)=>{
  return(
      <Card className={classes.users}>
        <ul>
          {props.users.map((user)=>(
            <li>{user.name}({user.age}YearsOld)</li>
          ))}
        </ul>
      </Card>
  )

}
export default UserList