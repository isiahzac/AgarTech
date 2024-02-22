import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import Item from './Item'; 

export const Popular = () => {
  return (
    <div className="popular">
        <h1>Popular</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
            
            <div className="card-item"></div> 
            <div className="card-item"></div>
            <div className="card-item"></div>
        </div>
    </div>
  )
}
