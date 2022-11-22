import React, { useState } from 'react'
import './Login.css'
import logo  from './images/logo-white.png'
import ribbon  from './images/RepeatG2.png'
import downribbon from './images/Repeatgrid_3.png'
import { Link } from 'react-router-dom'
//import { gql } from 'apollo-boost'

// const LOGIN_QUERY = gql`
//     mutaion Login($name: !String, $password: !String){
//         me{

//         }
//     }
// `


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword ]= useState('')

    const signIn = (e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)

    }

    
    return (
        <div className='Login_Box'>
            <Link to='/'><img className='Logo' src={logo} alt=''></img></Link>
            <img className='Ribbon' src={ribbon} alt=''></img>
            
            <form><input type="text" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <Link className='FP' to=''>Forgot Password?</Link>
            <button className='Button' onClick={signIn}>Login</button>
            </form>
            
            
            
            <button className='Facebook Button'>Facebook</button>
            <button className='Button'>Google</button>
            <p>New to Sokotimam? <Link className='SP' to='/sign-up'>Create an Account</Link></p>
            <img className='DownRibbon' src={downribbon} alt=''></img>
        </div>
    )
}

export default Login
