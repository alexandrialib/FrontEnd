import React from 'react';
import {Link }from 'react-router-dom'
import '../../css/Toolbar.css'
import logo from '../../images/logo.png'
import {SignedLinks} from './SignedLinks'
import DrawerToggleButton from'./DrawerToggleButton';

export const Navbar = () => (
<header>
 <nav className="toolbar">

    <div className="toolbar-navigation">
    <div className="toolbar-navigation-logo">
    <DrawerToggleButton />
     
    </div>
    <div className="spacer"></div>
          <div className="toolbar-navigation-items">
            <ul>
            <li><Link to='/About' >About</Link></li>
            <li><Link to='/Profile' >Profile</Link></li>
            <li><Link to='/categories' >Categories</Link></li>
            <li><Link to='/login' >Sign in</Link></li>
            </ul>
            
          </div>
    
    </div>
  </nav>
</header>
)

