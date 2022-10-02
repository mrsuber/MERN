import './Header.css'
import logo from '../../images/logo.png'
import searchIcon from '../../images/search.png'
import basket from '../../images/basket2.png'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {sumBy} from 'lodash'
import { useState } from 'react'
import { useEffect } from 'react'
const Header = ()=>{
  const{auth,cart} = useSelector(state=>state)
  const [cartItems, setCartItems] = useState(null)

  useEffect(()=>{
    const cartItemst = cart?.cartItems?.cartDetails
    setCartItems(cartItemst)
  },[cart?.cartItems?.cartDetails])
  
  
  const itemCount = sumBy(cartItems, (item) => item?.quantity);
  return(
    <nav>
      <div className="Header__container">
        <div className="Header__inner">
      {/* the logo*/}
          <div className="Header__logo" >
              <img src={logo} alt="logo" />
          </div>
          <div className="Header__searchbar">
            <input type="text" placeholder="Search" />
            <div className="Header__searchIcon">
              <img src={searchIcon} alt="search-icon" />
            </div>
          </div>
          <div className="Header__right-container">
            <div className="Header__navButton" >
              <p>Hello,</p>
              <p>{auth ? auth?.user?.username : "Guest"}</p>
            </div>
            <div className="Header__navButton" >
              <p>Return,</p>
              <p>& Orders</p>
            </div>
            <Link to="/cart">
            <div className="Header__basketButton" >
              
              <img src={basket} alt="basket" />
              <p>{itemCount}</p>
              
            </div>
            </Link>
          </div>
          </div>
          {/*search for less mobile screen*/}
          <div className="Header__searchbar-mobile">
            <input type="text" placeholder="Search" />
            <div className="Header__searchIcon">
              <img src={searchIcon} alt="search-icon" />
            </div>
          </div>
      </div>
    </nav>
  )
}


export default Header
