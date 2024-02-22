import React from 'react'
import './ProductDisplay.css'
import start_icon from "../Assets/start_icon.png";
import start_dull_icon from "../Assets/start_dull_icon.png";
import { Button } from 'bootstrap';


export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
      <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        
      </div>
       <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt="" />
       </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">${product.old_price}</div>
            <div className="productdisplay-right-prices-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur".

        </div>
        <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-size">
             <di>#</di>
             <di>#</di>
             <di>#</di>
             <di>#</di>
             <di>#</di>

          </div>  
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Device</p>
        <p className='productdisplay-right-category'><span>Category :</span>Device</p>
      </div> 
    </div>
  )
}
