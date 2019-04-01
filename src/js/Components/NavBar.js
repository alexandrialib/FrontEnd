import React from 'react';
import {Link }from 'react-router-dom'
import '../../css/Toolbar.css'
import logo from '../../images/logo.png'
import {SignedLinks} from './SignedLinks'

export const Navbar = () => (
   
      <nav className="nav-wrapper grey darken-3 toolbar left hide-on-med-and-down">
          <div className="container menu-item">
            <Link to='/categories' ><img className="bar-logo" src = {logo} alt="logo"/></Link>
            
            <Link to='/About' >About</Link>
            <Link to='/Profile' >Profile</Link>
            <Link to='/categories' >Categories</Link>
            <Link to='/login' >Sign in</Link>
            
            
          </div>
      </nav>
)

