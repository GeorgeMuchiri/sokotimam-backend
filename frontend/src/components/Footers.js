import React from 'react'
import './Footers.css'
import { Link } from 'react-router-dom';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import repeat from './images/Repeatgrid.png';

function Footers() {
    return (
        <div className='Footer'>
            <div className='Links'>
                <div className='Need_Help'>
                    <h4>Need Help?</h4>
                    <Link to="" className='Sublink'>How to Register</Link><br/>
                    <Link to="" className='Sublink'>Forgot Password?</Link><br/>
                    <Link to="" className='Sublink'>Open Account</Link><br/>
                    <Link to="" className='Sublink'>FAQ</Link><br/>
                    <Link to="" className='Sublink'>After Sale Policy</Link>
                </div>
                <div className='Partner'>
                    <h4>Partner with Us</h4>
                    <Link to="" className='Sublink'>Seller Center</Link><br/>
                    <Link to="" className='Sublink'>Payment Setup</Link><br/>
                    <Link to="" className='Sublink'>Sokotimam Policy</Link><br/>
                </div>
                <div className='About'>
                    <h4>About Us</h4>
                    <Link to="" className='Sublink'>Sokotimam Careers</Link><br/>
                    <Link to="" className='Sublink'>Our Mission</Link><br/>
                    <Link to="" className='Sublink'>Contact Us</Link><br/>
                </div>
                <div className='International'>
                    <h4>International</h4>
                    <Link to="" className='Sublink'>Kenya</Link><br/>
                    <Link to="" className='Sublink'>Uganda</Link><br/>
                    <Link to="" className='Sublink'>Tanzania</Link><br/>
                </div>
            </div>
            <div className='Socials'>
                <img className="Socials_img" src={facebook} alt=''></img>
                <img className="Socials_img" src={twitter} alt=''></img>
                <img className="Socials_img" src={instagram} alt=''></img>
                
            </div>
            <p>© 2021 Copyright: sokotimam</p>
            <div className='Ribbon'>
                <img src={repeat} className='Repeat_Grid' alt=''></img>
            </div>
            
        </div>
    )
}

export default Footers;
