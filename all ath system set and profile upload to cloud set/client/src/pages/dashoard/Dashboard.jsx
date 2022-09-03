import {useEffect} from 'react'
import {Topbar, Sidebar,RecentUsers,RecentInfoInput,Card} from '../../components'
import './dashboard.css'
import {useSelector} from 'react-redux'
import img from '../../images/me.webp'

let infoCount=1
let userCount=20
let increase=10
let decrease=0


const Dashboard = () =>{
  const {auth} = useSelector(state => state)

  return(
    <>
    <Sidebar/>
  <div className="admin__main">
    <Topbar/>

    <Card
    userCount={userCount}
     infoCount={infoCount}
     increase={increase}
     decrease={decrease}
    />
    
  </div>
</>

  )
}

export default Dashboard
