import React from 'react';
import Header from './Header'
import Footers from './Footers'
import './Dash.css'

import craft from './images/hand-craft.png'
import './Account.css'

import dash from './images/dash.svg'
import customers from './images/customers.svg'
import inventory from './images/inventory.svg'
import reviews from './images/reviews.svg'
import logout from './images/logout.svg'
import image from './images/image_2.jpg'
import prof from './images/Dummy.jpg.webp'


function Dash() {
  return <div>
      <Header />
      <div className='_dash'>
            <div className='Left_Dash'>
                <div className='Left_Profile'>
                    <img src={craft} alt=''></img>
                    <h5>Handcraft Africa Ltd</h5>
                </div>
                <div className='Acc_Side'>
                    <img src=''  className='' alt=''></img>
                    <p className='Acc_Label'>Dashboard</p>
                </div>
                <div className='Acc_Side'>
                    <img src={inventory} alt=''></img>
                    <p className='Acc_Label'>Inventory</p>
                </div><div className='Acc_Side'>
                    <img src={customers} alt=''></img>
                    <p className='Acc_Label'>Customers</p>
                </div><div className='Acc_Side'>
                    <img src={reviews} alt=''></img>
                    <p className='Acc_Label'>Reviews</p>
                </div>
                <div className='Acc_Side'>
                    <img src={reviews} alt=''></img>
                    <p className='Acc_Label'>Orders</p>
                </div>
                <div className='Log_out'>
                  <img src={logout} alt=''></img>
                  <p>Log Out</p>
                </div>
            </div>
            <div className='Right_Dash'>
                <div className='Welcome_Left'>
                  <h2> Welcome back, Handcraft!</h2>
                  <p> Friday 21st July, 2022</p>
                    <div className='Announcement'>
                      <div className='an_text'>
                      <h2>Good Job!</h2>
                      <p> you have 23 new visitors 
                        <br />in the last 7 days</p>
                      </div>
                      <img src={inventory} alt=''></img>
                    </div>
                    <div className='P_grid'>
                      <div className='_grid_item'>
                        <h5>+8.5K</h5>
                        <p>Favorite</p>
                      </div>
                      <div className='_grid_item'>
                        <h5>+4.1K</h5>
                        <p>Add to Bag</p>
                      </div>
                      <div className='_grid_item'>
                        <h5>+5.9K</h5>
                        <p>Orders</p>
                      </div>
                    </div>
                    <div className='Recent_Sold'>
                        <h4> Recent Sold</h4>
                        <div className='R_product'>
                          <img src={image} alt=''></img>
                          <div className='R_product_desc'>
                            <h5> Hand Made Bag</h5>
                            <p>Multicolor type</p>
                            <div className='earned'><p>KES 1,900 earned</p></div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='Welcome_Right'>
                  <h4>Performance</h4>
                  <p> New Clients(21)</p>
                  <div className='client_prof1'>
                    <div className='client_prof'>
                      <img src={prof} alt=''></img>
                      <p>Kenneth K.</p>
                    </div>
                    <div className='client_prof'>
                      <img src={prof} alt=''></img>
                      <p>Joseph W.</p>
                    </div>
                    <div className='client_prof'>
                      <img src={prof} alt=''></img>
                      <p>Kelvin W.</p>
                    </div>
                    <div className='client_prof'>
                      <img src={prof} alt=''></img>
                      <p>Timothy N.</p>
                    </div>
                    
                  </div>
                  <div className='chart'>
                  <h6>Your progress</h6>
                  <div className='chart_perf'>
                      <h6>Total Income: 18K</h6>
                      <div className='bar'></div>
                  </div>
                  <div className='chart_perf'>
                    <h6>Best Selling: 5.5K</h6>
                    <div className='bar'></div>
                  </div>
                  <div className='chart_perf'>
                    <h6>Worst Selling: 100</h6>
                    <div className='bar'></div>
                  </div>
                  </div>
                </div>
                
            </div>
      </div>
      <Footers />
  </div>
}

export default Dash;

