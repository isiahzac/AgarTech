import React from 'react'
import './Breadcrum.css'
import start from '../Assets/Star.svg'


const Breadcrum = (props) => {
    const {products} = props;

  return (
    <div className= 'breadcrum'>
    HOME <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
    
    </div>
  )
}

export default Breadcrum