import React, { useRef, useState } from 'react';
 import { 
    FaCheckSquare,  
    FaStar
} from 'react-icons/fa';
import { NavLink} from 'react-router-dom';
import './Login.css';
const Login = () => {
    // functionalities will be added with we want to consume the api's from the endpoint.
    const [ showLogin, SetShowLogin ] = useState('');
    const InputInfo = useRef(null);
  return (
    <>
        <article className="login-app">
            <section className='primary-container'>
                <img src={process.env.PUBLIC_URL + "images/Rect.png"} alt='*'/>
                <aside className="login-stack">
                    <legend className="title">
                        <h1>Welcome!</h1>
                    </legend>
                    <form
                        className='form-control' 
                        action='/'>
                        <label 
                            className='headers LOGIN'
                            htmlFor='Login'>
                            LOGIN 
                        </label>
                        <main className='btn-container '>
                            <div className="google__container">
                                <span className="info">
                                    { <img src={process.env.PUBLIC_URL + "images/logo.png"} 
                                    alt='*' 
                                    style={{
                                        width: 25,
                                        height:25,
                                    }} className='react-icon i' />  }
                                    <input 
                                        type='email'
                                        placeholder='Sign in with Google'
                                        id='email'
                                    />
                                </span>
                            </div>
                        </main>
                        <main className="email-container">
                            <aside className="email-links">
                                <div className='line-color'></div>
                                    <span className='mail-card'>
                                        or sign up with Email
                                    </span>
                                <div className='color-line'></div>
                            </aside>
                        </main>
                        <main className='login'>
                            <label 
                                className='headers'
                                htmlFor='Email'>
                                <div className='flex-mail-container'>
                                    <div className="flex-mail">
                                        Email 
                                        <div className='icon-star'>
                                            <FaStar className='star-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <input 
                                type='email' 
                                id='email' 
                                placeholder='example@gmail.com'
                                className='input-bg input-text'
                            />
                        </main>
                        <main className='login'>
                            <label 
                                className='headers'
                                htmlFor='Email'>
                                <div className='flex-mail-container'>
                                    <div className="flex-mail">
                                        Password
                                    </div>
                                    <div className='icon-star'>
                                        <FaStar className='star-icon'/>
                                    </div>
                                </div>
                            </label>
                            <input 
                                type='password' 
                                id='email' 
                                placeholder=''
                                className='input-bg input-text'
                            />
                        </main>
                        <main className="footer-icons">
                            <div>
                                <span>
                                    <ul>
                                        <li>
                                            <FaCheckSquare className='check-square'/>
                                            <NavLink to='/' className='remind'>
                                                Remember Me
                                            </NavLink>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to='/' className='password-btn'>
                                        Forget Password?
                                    </NavLink>
                                </li>
                            </ul>
                        </main>
                        <footer className="items">
                            <div>
                                <button className="btn-login  btn-color btn-right">
                                    LOGIN
                                </button>
                            </div>
                            <main className="last-btn">
                                <div className='last-btn-btn btn-last'>
                                    <span>
                                        <ul>
                                            <li>
                                                <NavLink to='/' className='not-register'>
                                                    Not Registered? 
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </span>
                                    <div>
                                        <ul>
                                            <li>
                                                <NavLink to='/' className='not-register color-btn'>
                                                    Create An Account
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </main>
                        </footer>
                    </form>
                </aside>
            </section>
        </article>
    </>
  )
}

export default Login
