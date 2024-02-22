import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

    const [menu, setMenu] = useState('home');
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <h1>AgarTech</h1>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu('home')}}><Link style={{textDecoration: 'none'}} to="/">Home</Link>{menu === 'home' ? <hr/>:<></>}</li>
            <li onClick={() => {setMenu('quien')}}><Link style={{textDecoration: 'none'}} to="/quien">Quién somos</Link>{menu === 'quien'? <hr/>:<></>}</li>
            <li onClick={() => {setMenu('vende')}}><Link style={{textDecoration: 'none'}} to="/vende">Vende</Link>{menu === 'vende' ? <hr/>:<></>}</li>
            <li onClick={() => {setMenu('ayuda')}}><Link style={{textDecoration: 'none'}} to="/ayuda">Ayuda</Link>{menu === 'ayuda' ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} size="2xl" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
