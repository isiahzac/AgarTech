import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'
import card_icon from '../assets/cart_icon.png'


export const Navbar = () => {

    const [menu, setMenu] = useState('home');
  return (
    <div className="navbar-container">
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="" />
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
    <div className="hamburger-menu-container">
            <FontAwesomeIcon className='hamburger-menu-icon' icon={faBars} size="2xl" />
            <ul className="nav-categories">
                <li><Link style={{textDecoration: 'none'}} to="/category1">Category 1</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/category2">Category 2</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/category3">Category 3</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/category4">Category 4</Link></li>
            </ul>

        </div>
    </div>
  )
}
