import React from 'react'
import './Navbar.css'
import logot from '../Asset/logot.png'
import cart_icon from '../Asset/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-log">
            <img src={logot } alt=""/>
            <p>JOSEPA</p>

        </div>
        <ui className="nav-menu">
          <li >Shop</li>
          <li >Men</li>
          <li >Women</li>
          <li >Kids</li>
          
        </ui>
        <div className="nav login cart"></div>
        <button>login</button>
        <img src={cart_icon} alt="" />
        <div className="nav cart count">0</div>
    </div>
  )
}

export default Navbar