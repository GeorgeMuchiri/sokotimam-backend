import React from 'react';
import Footers from './Footers';
import Header from './Header';
import './Account.css'
import dummy from './images/Dummy.jpg.webp';
import shopbag from'./images/shopping-bag.svg'
import inbox from './images/inbox.svg'
import heart from './images/heart.svg'
import medal from './images/medal.svg'
import coupon from './images/coupon.svg'
import { Link } from 'react-router-dom';


function Account() {
  return <div>
      <Header />
      <div className='Account_Container'>
          <div className='Account_Left'>
                <div className='Acc_Profile'>
                    <img src={dummy} alt=''></img>
                    <h4>Test User</h4>
                </div>
                <div className='Acc_Side'>
                    <img src={shopbag}  className='' alt=''></img>
                    <p className='Acc_Label'>Orders</p>
                </div>
                <div className='Acc_Side'>
                    <img src={inbox} alt=''></img>
                    <p className='Acc_Label'>Inbox</p>
                </div><div className='Acc_Side'>
                    <img src={heart} alt=''></img>
                    <p className='Acc_Label'>Saved Items</p>
                </div><div className='Acc_Side'>
                    <img src={coupon} alt=''></img>
                    <p className='Acc_Label'>Vouchers</p>
                </div><div className='Acc_Side'>
                    <img src={medal} alt=''></img>
                    <p className='Acc_Label'>Rewards</p>
                </div>
              
          </div>
          <div className='Account_Overview'>
                <div className='Acc_Title'>
                    <h4>Account Overview</h4>
                </div>
                <div className='Acc_Container'>
                    <div className='Acc_Contents'>
                        <div className='Acc_Title'>
                            <h5>Account details</h5>
                        </div>
                        <p className='_Name'>Kennth Kisilu</p>
                        <p className='_Email'>kkisilu@biztimamventures.com</p>
                        <Link to="#" className='_Edit'>EDIT</Link>
                    </div>
                    <div className='Acc_Contents'>
                        <div className='Acc_Title'>
                            <h5>Shopping Address</h5>
                        </div>
                        <p className='_Name'>Kasarani</p>
                        <p className='_Email'>Building 23, Equity Stage</p>
                        <Link to="#" className='_Edit'>EDIT</Link>
                    </div>
                    <div className='Acc_Contents'>
                        <div className='Acc_Title'>
                            <h5>Store Credit</h5>
                        </div>
                        <p className='Store_Name'>KES: 0.00</p>
                        
                        
                    </div>
                </div>
          </div>
      </div>
      <Footers />
  </div>;
}

export default Account;
