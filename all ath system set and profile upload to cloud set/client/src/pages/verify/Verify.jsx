import React, {useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './verify.css'
import { verification,login,logout,resendMail } from '../../redux/actions/authAction'
import {useDispatch,useSelector} from 'react-redux'

const Verify = () =>{
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state)
  // start of login
  const initialState2 = { email:'', password:'' }
  const [userData2, setUserData2] = useState(initialState2)


  const {email, password} = userData2

  const [typePass, setTypePass] = useState(false)



  const handleChangeInput2 = e =>{
    const {name, value} = e.target
    setUserData2({...userData2, [name]:value})
  }

  const handleSubmit2 = e =>{
    e.preventDefault()
    dispatch(login(userData2))
  }


  //start of verify
  const initialState = { verify:'' }
  const [userData, setUserData] = useState(initialState)


  const {verify} = userData


  const handleChangeInput = e =>{
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(verification({userId:auth.user._id, otp:userData.verify}))
  }

  const navigate = useNavigate()
  useEffect(()=>{
    if(auth.token)navigate('/')
  },[auth.token, navigate])

  return(<>
    {auth.token?<div className="login_page">

    <form onSubmit={handleSubmit}>
    <div className="login__heading">
      <h1>Email-Verification</h1>
    </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Verification Code</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInput} value={verify} name="verify"/>
  </div>


  <button type="submit" className="btn btn-dark w-100" style={{marginBottom:'10px'}}
  disabled={verify ? false : true}
  >Verify Now</button>
  <p className="my-2">Or Resend the code
  <span  style={{color:'white', background:'crimson', padding:'10px 5px', marginLeft:'10px', borderRadius:'5px',cursor: 'pointer'}} onClick={()=>dispatch(resendMail({email: auth.user.email,userId:auth.user._id}))}>Resend Code</span>
  <span  style={{color:'white', background:'crimson', padding:'10px 5px', marginLeft:'10px', borderRadius:'5px',cursor: 'pointer'}} onClick={()=>dispatch(logout())}>Logout</span>

  </p>
</form>
    </div>




:<div className="login_page">

<form onSubmit={handleSubmit2}>
<div className="login__heading">
  <h1>Winetasting</h1>
</div>
<div className="form-group">
<label htmlFor="exampleInputEmail1">Email address</label>
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInput2} value={email} name="email"/>
</div>
<div className="form-group">
<label htmlFor="exampleInputPassword1">Password</label>
<div className="pass">
<input type={typePass? "text" : "password"} className="form-control" id="exampleInputPassword1" onChange={handleChangeInput2} value={password} name="password"/>
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
</div>}

  </>)
}

export default Verify
