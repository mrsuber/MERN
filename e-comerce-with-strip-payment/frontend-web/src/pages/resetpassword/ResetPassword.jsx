import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import {resetPassword} from '../../redux/actions/authAction'
import {useLocation} from 'react-router'
import queryString from 'query-string'

const ResetPassword = () =>{
  const {auth,alert} = useSelector(state => state)
  const navigate = useNavigate()
  const location = useLocation()





  useEffect(()=>{
    if(auth.token)navigate('/')
  },[auth.token, navigate])

  const initialState = {

    password:'',
    cf_password:'',


  }
  const [userData, setUserData] = useState(initialState)

  const { password, cf_password} = userData

  const [typePass, setTypePass] = useState(false)
  const [typeCf_Pass, setTypeCf_Pass] = useState(false)
  const dispatch = useDispatch()

  const handleChangeInput = e =>{
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = e =>{
    e.preventDefault()
    const {token, id} = queryString.parse(location.search)
    dispatch(resetPassword({password:userData.password, token:token, id:id}))
  }


  return(
    <div className="login_page">

    <form onSubmit={handleSubmit}>
    <div className="login__heading">
      <h1>Reset Password</h1>
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


  <button type="submit" className="btn btn-dark w-100"
  >Reset Password</button>
  <p className="my-2">Already have an account? <Link to="/login" style={{color:'crimson'}}>Login Now</Link></p>
</form>
    </div>
  )
}

export default ResetPassword
