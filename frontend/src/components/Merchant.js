import React from 'react';
import Header from './Header'
import Footers from './Footers'
import './Merchant.css'
import './Dash.css'
import dash from './images/dash.svg'
import customers from './images/customers.svg'
import inventory from './images/inventory.svg'
import reviews from './images/reviews.svg'
import logout from './images/logout.svg'
import craft from './images/hand-craft.png'
import SearchIcon from '@mui/icons-material/Search';
import image from './images/image_1.jpg'
import { Link } from 'react-router-dom';

function Merchant() {
  return <div>
      <Header />
      <div className='_dash'>
        <div className='Left_Dash'>
                  <div className='Left_Profile'>
                      <img src={craft} alt=''></img>
                      <h5>Handcraft Africa Ltd</h5>
                  </div>
                  <div className='Acc_Side'>
                      <img src={dash}  className='' alt=''></img>
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
                  <div className='Log_out'>
                    <img src={logout} alt=''></img>
                    <p>Log Out</p>
                  </div>
              </div>
              <div className='right1'>
                    <div className='Upper_func'>
                        <button className='Upper_search'><SearchIcon /></button>
                        <Link to='/inventory'> <button className='Upper_prod'>Add Product</button></Link>
                        
                    </div>
                    <div className='prod_ann'> 
                    <h6>Total Products:</h6> <span>18</span>
                    </div>
                    <div className='Inventory_grid'>
                            <div className='Inventory_card'>
                                    <img src={image} alt=''></img>
                                    <p className='Inventory_title'>Apple products set case</p>
                                    <p className='Inventory_d'>Matching Colors</p>
                                    <p className='Inventory_o'>3 Options</p>
                            </div>
                            <div className='Inventory_card'>
                                    <img src={image} alt=''></img>
                                    <p className='Inventory_title'>Apple products set case</p>
                                    <p className='Inventory_d'>Matching Colors</p>
                                    <p className='Inventory_o'>3 Options</p>
                            </div>
                            <div className='Inventory_card'>
                                    <img src={image} alt=''></img>
                                    <p className='Inventory_title'>Apple products set case</p>
                                    <p className='Inventory_d'>Matching Colors</p>
                                    <p className='Inventory_o'>3 Options</p>
                            </div>
                            <div className='Inventory_card'>
                                    <img src={image} alt=''></img>
                                    <p className='Inventory_title'>Apple products set case</p>
                                    <p className='Inventory_d'>Matching Colors</p>
                                    <p className='Inventory_o'>3 Options</p>
                            </div>
                            <div className='Inventory_card'>
                                    <img src={image} alt=''></img>
                                    <p className='Inventory_title'>Apple products set case</p>
                                    <p className='Inventory_d'>Matching Colors</p>
                                    <p className='Inventory_o'>3 Options</p>
                            </div>
                            <div className='Inventory_card'>
                                    <img src={image} alt=''></img>
                                    <p className='Inventory_title'>Apple products set case</p>
                                    <p className='Inventory_d'>Matching Colors</p>
                                    <p className='Inventory_o'>3 Options</p>
                            </div>
                    </div>
              </div>
      </div>
      <Footers />
  </div>
}

export default Merchant;
