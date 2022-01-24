import React from 'react';
import Header from './Header';
import Footers from './Footers';
import './Product.css'



function Product() {
  return <div>
      <Header  />
      <div className='Description_Container'>
        <div className='Desc_Large'>
          <div className='__img'></div>
          <div className='small_img'>
            <img alt=""></img>
            <img alt=""></img>
            <img alt=""></img>
            <img alt=""></img>
          </div>
        </div>
        <div className='Desc_Small'></div>
      </div>
      <div className='More'>

      </div>
      <div className='Product_Desc'>

      </div>
      <div className='Product_Desc'></div>
      <div className='More space'></div>
      <Footers />
      
  </div>
}

export default Product;

