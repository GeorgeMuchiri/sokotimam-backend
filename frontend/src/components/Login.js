import React from 'react'
import './Login.css'
import logo  from './images/logo-white.png'
import ribbon  from './images/RepeatG2.png'
import downribbon from './images/Repeatgrid_3.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='Login_Box'>
            <Link to='/'><img className='Logo' src={logo} alt=''></img></Link>
            <img className='Ribbon' src={ribbon} alt=''></img>
            <input type="text" placeholder='email'></input>
            <input type="password" placeholder='password'></input>
            <Link className='FP' to=''>Forgot Password?</Link>
            <button className='Button'>Login</button>
            <button className='Facebook Button'>Facebook</button>
            <button className='Button'>Google</button>
            <p>New to Sokotimam? <Link className='SP' to='/sign-up'>Create an Account</Link></p>
            <img className='DownRibbon' src={downribbon} alt=''></img>
        </div>
    )
}

export default Login
