import React from 'react'
import './Navbar.css'
import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-log">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>

        </div>
    </div>
  )
}

export default Navbar