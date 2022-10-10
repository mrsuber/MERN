import React, {useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './ForgotPassword.css'
import { forgotPassword } from '../../redux/actions/authAction'
import {useDispatch,useSelector} from 'react-redux'

const ForgotPassword = () =>{
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state)


  //start of verify
  const initialState = { email:'' }
  const [userData, setUserData] = useState(initialState)


  const {email} = userData


  const handleChangeInput = e =>{
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(forgotPassword(userData))
  }

  const navigate = useNavigate()
  useEffect(()=>{
    if(auth.token)navigate('/')
  },[auth.token, navigate])

  return(<>
    <div className="login_page">

    <form onSubmit={handleSubmit}>
    <div className="login__heading">
      <h1>Reset Password</h1>
    </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInput} value={email} name="email"/>
  </div>


  <button type="submit" className="btn btn-dark w-100" style={{marginBottom:'10px'}}
  disabled={email ? false : true}
  >ResetPassword</button>
  <p className="my-2">Already have an account? <Link to="/login" style={{color:'crimson'}}>Login Now</Link></p>

</form>
    </div>





  </>)
}

export default ForgotPassword
