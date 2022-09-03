import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {HomePage} from './pages'
 import MobileView from './pages/Components/MobileView/MobileView'
import Login from './pages/Components/Login';
const App=()=> {
  return (
      <>
        <MobileView/>
        <Login/>
      </>
  );
}

export default App;
