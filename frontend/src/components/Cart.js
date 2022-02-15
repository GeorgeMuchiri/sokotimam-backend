import React from 'react';
import Header from './Header'
import Footer from './Footers'
import './Cart.css'
import downribbon from './images/Repeatgrid_3.png'
import upperribbon from './images/RepeatG2.png'

import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div>
            <Header />
            <div className='Main_Cont'>
            <div className='Left_side'>
                <div className='cont_shop'>
                    <Link className='cont_shop_link' to="/">Continue Shopping ></Link>
                </div>
                <div>
                    <div className='cart_title'>
                            <h6>PRODUCT</h6>
                            <h6>PRICE</h6>
                            <h6>QUANTITY</h6>
                            <h6>TOTAL</h6>
                    </div>
                    <div className='cart_prod'>
                            <img src='' alt=''></img>
                            <p>KES 1500</p>
                           <p> <span className='span__'> - </span> 1 <spa className='span_'>+</spa></p>
                            <p>KES 1500</p>
                    </div>
                    <div className='cart_prod'>
                            <img src='' alt=''></img>
                            <p>KES 1500</p>
                            <p> <span className='span__'> - </span> 1 <span className='span_'> + </span></p>
                            <p>KES 1500</p>
                    </div>
                    <div className='cart_prod'>
                            <img src='' alt=''></img>
                            <p>KES 1500</p>
                            <p> <span className='span__'> - </span> 1 <span className='span_'> + </span></p>
                            <p>KES 1500</p>
                    </div>
                    <div className='cart_prod'>
                            <img src='' alt=''></img>
                            <p>KES 1500</p>
                            <p> <span className='span__'> - </span> 1 <span className='span_'> + </span></p>
                            <p>KES 1500</p>
                    </div>
                </div>
            </div>
            <div className='Right_side'>
                 
            <img className='upperRibbon' src={upperribbon} alt=''></img>
            <h3>Cart Total:</h3>
            <h2> KES 6000</h2>
            <button>Check Out</button>
            <img className='downRibbon' src={downribbon} alt=''></img>
            </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Cart;
