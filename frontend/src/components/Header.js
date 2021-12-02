import React from 'react'
import logo from './images/logo-white.png'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__one">
                <img className="header__logo" src={logo} alt=""></img>
                <input className="header__search" type="text"></input>
                
            </div>
            <div className="header__two">

            </div>
        </div>
    )
}

export default Header;
