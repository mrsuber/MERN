import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { logout } from '../../redux/actions/authAction'

const Home = ()=> {
  const {auth} = useSelector(state => state)
  const dispatch = useDispatch()

  return(
    <div>
      <h1>Home </h1>
      <h4>Welcome {auth.user.username} </h4>
      <Link to="/admin">Dashboard</Link>
      <br/>
      <Link to='/' onClick={() => dispatch(logout())}>Logout</Link>
    </div>
  )
}

export default Home
