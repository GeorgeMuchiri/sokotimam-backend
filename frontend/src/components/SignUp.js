import React, { useState } from 'react'
import './SignUp.css'
import darklogo from './images/logo-dark.png'
import downribbon from './images/Repeatgrid_3.png'
import { Link, useNavigate } from 'react-router-dom'

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks'


const SIGN_UP = gql`
    mutation SignUp(
        $email: String!,
        $username: String!,
        $firstname: String!,
        $lastname: String!,
        $phone: String!,
        $password: String!
    ){
        createUsers(
            username: $username,
            email: $email,
            firstname: $firstname,
            lastname: $lastname,
            phone: $phone,
            password: $password
        ){
            username
            email
        }
    }

`


function SignUp() {
    const navigate = useNavigate()
    const [firstName, setFirstName] =  useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUserName] =  useState("")

    const [RegisterUser] = useMutation(SIGN_UP,{
        variables: {
            username: username,
            email: email,
            firstname: firstName,
            lastname: lastName,
            phone: phone,
            password: password
        },
        onCompleted: () => navigate('/')
    })

    function submitform(e){
        e.preventDefault()
        RegisterUser()
        
    }
 

    return (
        <div className='Two_Div'>
            <div className='Fancy_Text'>
                <Link to='/'><img className='D_Logo' src={darklogo} alt=''></img></Link>
                <p className='Welcome'>Welcome</p>
                <p className='A_Basket'>to africa's basket</p>
                <img className='downRibbon' src={downribbon} alt=''></img>
            </div>
            <div className='Input_Area'>
            <form onSubmit={submitform}>
                <h1 className='Announce'>Sign Up</h1>
                <div className='Cont_Area'>
                    
                    <div className="I_one">
                    
                    <input  className="I_Elements input" type='text' placeholder='username' value={username} onChange={(e)=> setUserName(e.target.value)}></input>
                    <input  className="I_Elements input" type='text' placeholder='firstname' value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
                    
                    <input  className="I_Elements input" type='text' placeholder='phone' value={phone} onChange={(e)=>(setPhone(e.target.value))}></input>
                   
                    <input className="I_Elements input" type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <div className='I_two'>
                    
                    <input  className="I_Elements input" type='text' placeholder='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                   
                    <input  className="I_Elements input" type='email' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    
                    <input className="I_Elements input" type='password' placeholder='confirm password'></input>
                    </div>
                    
                
                    
                </div>
                <div className='Checkbox'>
                <input className='Check' type="checkbox"></input><p className=''> I agree to the terms and conditions</p>
                </div>
                <button className='Create_Button'>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
