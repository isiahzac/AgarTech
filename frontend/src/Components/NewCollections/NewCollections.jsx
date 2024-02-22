import React from 'react'
import './NewCollections.css'

export const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1>Popular</h1>
        <hr />
        <div className="collections">
            {/* {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })} */}
            
                <div className="card-item"></div> 
                <div className="card-item"></div>
                <div className="card-item"></div>
            
            
                <div className="card-item"></div> 
                <div className="card-item"></div>
                <div className="card-item"></div>
            
        </div>
    </div>
  )
}
