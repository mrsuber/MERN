import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUsers,faSignOutAlt,faWineBottle,faCartArrowDown, faCommentDots,faGear} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import logo from '../../images/Logo_gold.png'
import './Sidebar.css'
import { logout } from '../../redux/actions/authAction'
import { useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'


const Sidebar = ({history}) => {
  const { auth } = useSelector(state=>state)

const dispatch = useDispatch()


  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__navigation">
          <ul>
            <li className="logoTitle">
            <Link to="/" className="link">
              <span className="admin__icon"><img src={logo} alt="digital experts" className="logo"/></span>
              <span className="admin__title winetasting__title"><h2>Ticket Sales</h2></span>
              </Link>
            </li>

            <li>
            <Link to="/admin" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faHome} /></span>
              <span className="admin__title">Dashboard</span>
              </Link>
            </li>
            <li>
            <Link to="/users" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faUsers} /></span>
              <span className="admin__title">Users</span>
              </Link>
            </li>
            <li>
            <Link to="/infos" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faWineBottle} /></span>
              <span className="admin__title">Wine Category</span>
              </Link>
            </li>



            <li>
            <Link to="/password" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faWineBottle} /></span>
              <span className="admin__title">Wine</span>
              </Link>
            </li>

            <li>
            <Link to="/register" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faCartArrowDown} /></span>
              <span className="admin__title">Orders</span>
              </Link>
            </li>
            <li>
            <Link to="/addInfo" className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faCommentDots} /></span>
              <span className="admin__title">Reviews</span>
              </Link>
            </li>

            <li>
            <Link to={`/profile/${auth.user._id}`} className="link">
              <span className="admin__icon"><FontAwesomeIcon icon={faGear} /></span>
              <span className="admin__title">Settings</span>
              </Link>
            </li>

            <li >
            <Link to="/" className="link" onClick={()=>dispatch(logout())}>
              <span className="admin__icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
              <span className="admin__title">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>



      </div>
    </div>
  )
}

export default Sidebar
