import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

    const [menu, setMenu] = useState('home');
  return (
    <div className="navbar-container">
    <div className='navbar'>
        <div className="nav-logo">
            <h1>AgarTech</h1>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu('home')}}><Link style={{textDecoration: 'none', color: '#000000'}} to="/">Home</Link>{menu === 'home' ? <hr/>:<></>}</li>
            <li onClick={() => {setMenu('quien')}}><Link style={{textDecoration: 'none', color: '#000000'}} to="/quien">Quién somos</Link>{menu === 'quien'? <hr/>:<></>}</li>
            <li onClick={() => {setMenu('vende')}}><Link style={{textDecoration: 'none', color: '#000000'}} to="/vende">Vende</Link>{menu === 'vende' ? <hr/>:<></>}</li>
            <li onClick={() => {setMenu('ayuda')}}><Link style={{textDecoration: 'none', color: '#000000'}} to="/ayuda">Ayuda</Link>{menu === 'ayuda' ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login" style={{textDecoration: 'none', color: '#000000'}}><FontAwesomeIcon className='user-icon' icon={faUserCircle} /></Link>
            <Link to="/cart" style={{textDecoration: 'none', color: '#000000'}}><FontAwesomeIcon icon={faCartShopping} size="2xl" /></Link>
            <div className="nav-cart-count">0</div>
        </div>

    </div>
    <div className="hamburger-menu-container">
            <FontAwesomeIcon className='hamburger-menu-icon' icon={faBars} size="2xl" />
            <ul className="nav-categories">
                <li><Link style={{textDecoration: 'none', color: '#000000'}} to="/dispositivos">Dispositvos</Link></li>
                <li><Link style={{textDecoration: 'none', color: '#000000'}} to="/category2">Category 2</Link></li>
                <li><Link style={{textDecoration: 'none', color: '#000000'}} to="/category3">Category 3</Link></li>
                <li><Link style={{textDecoration: 'none', color: '#000000'}} to="/category4">Category 4</Link></li>
            </ul>

        </div>
    </div>
  )
}
