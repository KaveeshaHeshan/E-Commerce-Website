import React, { useState } from 'react'   // added useState import
import './Navbar.css'
import logot from '../Asset/logot.png'
import cart_icon from '../Asset/cart_icon.png'

const Navbar = () => {
  const [menu,setmenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-log">
            <img src={logot } alt=""/>
            <p>JOSEPA</p>
        </div>

        <ui className="nav-menu">
          <li onClick={()=>{setmenu("shop")}}>Shop{menu=="shop"?<h/>:<></>}</li>
          <li onClick={()=>{setmenu("mens")}}>Men{menu=="mens"?<h/>:<></>}</li>
          <li onClick={()=>{setmenu("womens")}}>Women{menu=="womens"?<h/>:<></>}</li>  {/* fixed: quotes */}
          <li onClick={()=>{setmenu("kids")}}>Kids{menu=="kids"?<h/>:<></>}</li>      {/* fixed: quotes */}
        </ui>

        <div className="nav login cart"></div>
        <button>login</button>
        <img src={cart_icon} alt="" />
        <div className="nav cart count">0</div>
    </div>
  )
}

export default Navbar
