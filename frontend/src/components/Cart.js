import React from 'react';
import Header from './Header'
import Footer from './Footers'
import './Cart.css'
import downribbon from './images/Repeatgrid_3.png'

function Cart() {
    return (
        <div>
            <Header />
            <div className='Main_Cont'>
            <div className='Left_side'>
                <h1>Cart goest here</h1>
            </div>
            <div className='Right_side'>
            <img className='downRibbon' src={downribbon} alt=''></img>
            </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Cart;
