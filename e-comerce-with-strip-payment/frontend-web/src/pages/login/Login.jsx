import React, {useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './login.css'
import { login } from '../../redux/actions/authAction'
import {useDispatch,useSelector} from 'react-redux'

const Login = () =>{
  const initialState = { email:'', password:'' }
  const [userData, setUserData] = useState(initialState)
  const {auth} = useSelector(state => state)

  const {email, password} = userData

  const [typePass, setTypePass] = useState(false)

  const dispatch = useDispatch()

  const handleChangeInput = e =>{
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(login(userData))
  }

  const navigate = useNavigate()
  useEffect(()=>{
    if(auth.token)navigate('/')
  },[auth.token, navigate])

  return(
    <div className="login_page">

    <form onSubmit={handleSubmit}>
    <div className="login__heading">
      <h1>Msb shop</h1>
    </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInput} value={email} name="email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <div className="pass">
    <input type={typePass? "text" : "password"} className="form-control" id="exampleInputPassword1" onChange={handleChangeInput} value={password} name="password"/>
    <small onClick={() => setTypePass(!typePass)}>
      {typePass ? 'Hide' : 'Show'}
    </small>
    </div>
  </div>

  <button type="submit" className="btn btn-dark w-100"
  disabled={email && password ? false : true}
  >Login</button>
  <p className="my-2">You don't have an account? <Link to="/register" style={{color:'crimson'}}>Register Now</Link></p>
  <p className="my-2">forgot Password? <Link to="/forgotpassword" style={{color:'crimson'}}>Reset Password</Link></p>

</form>
    </div>
  )
}

export default Login
