import React from 'react';
import Header from './Header'
import Footers from './Footers'
import './Merchant.css'
import './Dash.css'
import './Inventory.css'
import dash from './images/dash.svg'
import customers from './images/customers.svg'
import inventory from './images/inventory.svg'
import reviews from './images/reviews.svg'
import logout from './images/logout.svg'
import craft from './images/hand-craft.png'

function Inventory() {
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
                <div className='Acc_Side'>
                    <img src={reviews} alt=''></img>
                    <p className='Acc_Label'>Orders</p>
                </div>
                <div className='Log_out'>
                  <img src={logout} alt=''></img>
                  <p>Log Out</p>
                </div>
            </div>
            <div className='Right_side_inventory'>
                <h3 className='titles'>Add to Inventory</h3>
                <div className='line'></div>
                <div className='to_store'>
                    <div className='identifier'>
                        <div className='identifier_desc'>
                        <label>Title</label>
                        <input type='text'></input>
                        </div>
                        <div className='identifier_desc'>
                        <label>Price</label>
                        <input type='text'></input>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='description_ar'>
                            <label>Description</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div className='photos_upload'>
                        <div className='identifier_desc'>
                        <label>Main Photo</label>
                        <input type='text'></input>
                        <button>Choose fille</button>
                        </div>
                        <div className='identifier_desc'>
                        <label>Photo 1</label>
                        <input type='text'></input>
                        <button>Choose fille</button>
                        </div>
                        <div className='identifier_desc'>
                        <label>Photo 2</label>
                        <input type='text'></input>
                        <button>Choose fille</button>
                        </div>
                        <div className='identifier_desc'>
                        <label>Photo 3</label>
                        <input type='text'></input>
                        <button>Choose fille</button>
                        </div>
                        <div className='identifier_desc'>
                        <label>Photo 4</label>
                        <input type='text'></input>
                        <button>Choose fille</button>
                        </div>
                    </div>
                    <div>
                        <button className='_add_p'>Add Product</button>
                    </div>
                </div>
            </div>
            </div>
      <Footers />
  </div>
}

export default Inventory;
