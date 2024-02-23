import React from 'react'
import './NewCollections.css'
import Item  from '../Item/Item'
import new_collection from '../NewCollections'

export const new_collections = () => {
  return (
    <div className="new-collections">
        <h1>Recién llegados</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })} 
            
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
