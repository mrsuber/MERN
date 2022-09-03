import {useEffect} from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {LoginScreen, RegisterScreen, DashboardScreen,Home,ProfileScreen,VerifyAccountScreen,ResetPassword,ForgotPassword} from './pages'
import {Alert} from './components'
import {useSelector, useDispatch} from 'react-redux'
import {refreshtoken} from './redux/actions/authAction'

import './App.css'



function App() {
  const { auth} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(refreshtoken())
  },[dispatch])
  return (
    <Router>
    {/*<input type="checkbox" id="theme"/>*/}
    <Alert />
    <div className="App">
      <div className="main">

      <Routes>
      <Route path="/register" element={<RegisterScreen/>} />
      <Route path="/" element={auth.token && auth.user.verified===true?<Home/> : <VerifyAccountScreen />} />
      <Route path="/login" element={ <LoginScreen />} />
      <Route path="/reset-password" element={ <ResetPassword />} />
      <Route path="/forgotpassword" element={ <ForgotPassword />} />

      <Route path="/verify" element={ auth.token?<VerifyAccountScreen />:<LoginScreen />} />
      <Route path="/admin" element={auth.token && auth.user.verified===true?<DashboardScreen/>:<VerifyAccountScreen />} />
      <Route path="/profile/:id" element={auth.token && auth.user.verified===true? <ProfileScreen />:<VerifyAccountScreen />} />
        </Routes>
      </div>

    </div>
    </Router>
  );
}

export default App;
