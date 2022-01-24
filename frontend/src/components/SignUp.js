import React from 'react'
import './SignUp.css'
import darklogo from './images/logo-dark.png'
import downribbon from './images/Repeatgrid_3.png'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className='Two_Div'>
            <div className='Fancy_Text'>
                <Link to='/'><img className='D_Logo' src={darklogo} alt=''></img></Link>
                <p className='Welcome'>Welcome</p>
                <p className='A_Basket'>to africa's basket</p>
                <img className='downRibbon' src={downribbon} alt=''></img>
            </div>
            <div className='Input_Area'>
                <h1 className='Announce'>Sign Up</h1>
                <div className='Cont_Area'>
                    <div className="I_one">
                    
                    <input  className="I_Elements input" type='text' placeholder='firstname'></input>
                    
                    <input  className="I_Elements input" type='text' placeholder='phone'></input>
                   
                    <input className="I_Elements input" type='password' placeholder='password'></input>
                    </div>
                    <div className='I_two'>
                    
                    <input  className="I_Elements input" type='text' placeholder='lastname'></input>
                   
                    <input  className="I_Elements input" type='email' placeholder='email'></input>
                    
                    <input className="I_Elements input" type='password' placeholder='confirm password'></input>
                </div>
                    
                </div>
                <div className='Checkbox'>
                <input className='Check' type="checkbox"></input><p className=''> I agree to the terms and conditions</p>
                </div>
                <button className='Create_Button'>Create Account</button>
            </div>
        </div>
    )
}

export default SignUp
