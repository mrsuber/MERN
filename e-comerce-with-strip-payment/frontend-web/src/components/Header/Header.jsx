
import './Header.css'
import logo from '../../images/logo.png'
import searchIcon from '../../images/search.png'
import basket from '../../images/basket2.png'

const Header = ()=>{
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
              <p>Guest</p>
            </div>
            <div className="Header__navButton" >
              <p>Return,</p>
              <p>& Orders</p>
            </div>
            <div className="Header__basketButton" >
              <img src={basket} alt="basket" />
              <p>0</p>
            </div>
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
