
import React from 'react';
import { 
  FaRegEnvelope,
  FaLock,
  FaCheckSquare,  
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Mobile.css';
const MobileView = () => {
  return (
    <>
       <article className="mobile-container">
          <main className="mobile-layout">
            <header>
              <div className="title">
                <h1>Sign  In</h1>
              </div>
            </header>
            <div className="google__container">
                <span className="info">
                  { <img src={process.env.PUBLIC_URL + "images/logo.png"} 
                  alt='*' 
                  style={{
                    width: 25,
                    height:25,
                  }} className='react-icon google' />  }
                  <input 
                    type='email'
                    placeholder='Sign in with Google'
                    id='email'

                  />
                </span>
            </div>
            <main className="email-container">
              <aside className="email-links new-color">
                <div className='line-color'></div>
                  <span className='mail'>
                    or Sign up with
                  </span>
                <div className='color-line'></div>
              </aside>
            </main>
            <form className="form-control">
              <label htmlFor='email'>
                <span className="info new">
                  < FaRegEnvelope className='react-icon'/>
                  <input 
                    type='email'
                    placeholder='Enter Mail'
                    id='email'
                  />
                </span>
              </label>
              <label htmlFor='email'>
                 {/* className='evelope-icon icon' */}
                <div className='email-icon'>
                  <span className="info new-data">
                    < FaLock className='react-icon'/>
                    <input 
                      type='password'
                      placeholder='Enter your password'
                      id='password'
                    />
                  </span>
                </div>
              </label>
            </form>
            <aside className='aside-container'>
                  <div>
                    <span>
                      <ul>
                        <li>
                            <FaCheckSquare/>
                            <NavLink to='/' className='remind text-color'>
                              Remember Me
                            </NavLink>
                          </li>
                      </ul>
                    </span>
                  </div>
                  <ul>
                    <li>
                        <NavLink to='/' className='password-btn text-color'>
                          Forget Password?
                      </NavLink>
                    </li>
                  </ul>
            </aside>
            <summary className="last-btn">
              <div>
                <button className="login login-btn">
                  Login
                </button>
              </div>
            </summary>
            <footer className="footer-container">
              <aside className='last-aside'>
                <span>
                  <ul>
                    <li>
                      <NavLink to='/' className='text-color'>
                        Don't have an account?
                      </NavLink>
                    </li>
                  </ul>
                </span>
                <div>
                  <ul>
                    <li>
                      <NavLink to='/' className='signUp'>
                        Sign Up
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </aside>
            </footer>
          </main>
       </article>
    </>
  );
}

export default MobileView;
