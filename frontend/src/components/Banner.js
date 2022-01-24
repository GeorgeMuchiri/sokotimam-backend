import React from 'react';
import './Banner.css';
import image_1 from './images/image_1.jpg';
import image_2 from './images/image_2.jpg';
import image_3 from './images/image_3.jpg';
import image_5 from './images/image_5.jpg';

import small_image_2 from './images/small_image_3.jpg';


function Banner() {
    return (
        <div className="banner_container">
            
            <div className="big_banner">
            <div className="img_banner">
                    <img src={image_1} alt=""></img>
                    <img src={image_2} alt=""></img>
                    <img src={image_3} alt=""></img>
                    <img src={image_5} alt=""></img>
                    <img src={image_1} alt=""></img>
                    <button>Shop Now</button> 
                </div>
                 
            
            </div>
            <div className="small_banner">
                <div className="img_small">
                    <img src={small_image_2} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Banner;
