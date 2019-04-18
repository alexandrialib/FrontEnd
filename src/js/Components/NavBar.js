import React from 'react';
import {Link }from 'react-router-dom'
import '../../css/nav.css'
export const Navbar = () => (
<header>
<nav>
            <span id="brand">
                  <a href="/">Alexandria</a>
            </span>

            <ul id="menu">
            <li><Link to='/About' >About</Link></li>
            <li><Link to='/Profile' >Profile</Link></li>
            <li><Link to='/categories' >Categories</Link></li>
            <li><Link to='/login' >Sign in</Link></li>
            </ul>

            <div id="toggle">
                  <div class="span" id="one"></div>
                  <div class="span" id="two"></div>
                  <div class="span" id="three"></div>
            </div>
      </nav>
      <div id="resize">
            
      <ul id="menu">
            <li><Link to='/About' >About</Link></li>
            <li><Link to='/Profile' >Profile</Link></li>
            <li><Link to='/categories' >Categories</Link></li>
            <li><Link to='/login' >Sign in</Link></li>
            </ul>

      </div>
</header>
)

