import {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Alert,Layout} from './components'
import {useDispatch} from 'react-redux'
import {refreshtoken} from './redux/actions/authAction'
import './App.css'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshtoken())
  },[dispatch])
  return (
    <Router>

    <Alert />
    <div className="App">
      <div className="main">

      <Layout/>
      </div>

    </div>
    </Router>
  );
}

export default App;
