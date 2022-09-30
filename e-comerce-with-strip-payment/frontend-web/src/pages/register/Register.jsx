import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import {register} from '../../redux/actions/authAction'

const Register = () =>{
  const {auth,alert} = useSelector(state => state)
  const navigate = useNavigate()
  useEffect(()=>{
    if(auth.token)navigate('/')
  },[auth.token, navigate])

  const initialState = {
    fullname:'',
    username:'',
    email:'',
    password:'',
    cf_password:'',
    gender:'male',

  }
  const [userData, setUserData] = useState(initialState)

  const {fullname,username, email, password, cf_password, gender} = userData

  const [typePass, setTypePass] = useState(false)
  const [typeCf_Pass, setTypeCf_Pass] = useState(false)
  const dispatch = useDispatch()

  const handleChangeInput = e =>{
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(register(userData))
  }


  return(
    <div className="login_page">

    <form onSubmit={handleSubmit}>
    <div className="login__heading">
      <h1>TicketSales</h1>
    </div>

    <div className="form-group">
      <label htmlFor="fullname">Full Name</label>
      <input type="text" className="form-control" id="fullname"  onChange={handleChangeInput} value={fullname} name="fullname" style={{background: `${alert.fullname ? '#fd2d6a14': ''}`}}/>
      <small className="form-text text-danger">{alert.fullname ? alert.fullname : ''}</small>
    </div>

    <div className="form-group">
      <label htmlFor="username">User Name</label>
      <input type="text" className="form-control" id="username"  onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')} name="username" style={{background: `${alert.username ? '#fd2d6a14': ''}`}}/>
      <small className="form-text text-danger">{alert.username ? alert.username : ''}</small>

    </div>


  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInput} value={email} name="email" style={{background: `${alert.email ? '#fd2d6a14': ''}`}}/>
    <small className="form-text text-danger">{alert.email ? alert.email : ''}</small>

  </div>


  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <div className="pass">
    <input type={typePass? "text" : "password"} className="form-control" id="exampleInputPassword1" onChange={handleChangeInput} value={password} name="password" style={{background: `${alert.password ? '#fd2d6a14': ''}`}}/>
    <small onClick={() => setTypePass(!typePass)}>
      {typePass ? 'Hide' : 'Show'}
    </small>
    </div>
    <small className="form-text text-danger">{alert.password ? alert.password : ''}</small>

  </div>

  <div className="form-group">
    <label htmlFor="cf_password">Confirm Password</label>
    <div className="pass">
    <input type={typeCf_Pass? "text" : "password"} className="form-control" id="cf_password" onChange={handleChangeInput} value={cf_password} name="cf_password" style={{background: `${alert.cf_password ? '#fd2d6a14': ''}`}}/>
    <small onClick={() => setTypeCf_Pass(!typeCf_Pass)}>
      {typeCf_Pass ? 'Hide' : 'Show'}
    </small>
    </div>
    <small className="form-text text-danger">{alert.cf_password ? alert.cf_password : ''}</small>

  </div>

  <div className="row justify-content-between mx-0 mb-3">
  <select name="gender" id ="gender" className=" custom-select text-capitalize" onChange={handleChangeInput}>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="others">Others</option>


  </select>

  </div>

  <button type="submit" className="btn btn-dark w-100"
  >Register</button>
  <p className="my-2">Already have an account? <Link to="/login" style={{color:'crimson'}}>Login Now</Link></p>
</form>
    </div>
  )
}

export default Register
