import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className= 'cartitems'>
     <div className="cartitems-format-main">
       <p>Productos</p>
       <p>Título</p>
       <p>Precio Antiguo</p>
       <p>Nuevo Precio</p>
       <p>Categoría</p>
       <p>Eliminar</p>

     </div>
     <hr />
     <div>
        <div className="cartitems-format">
        </div>
     </div>

    </div>
  )
}

export default CartItems