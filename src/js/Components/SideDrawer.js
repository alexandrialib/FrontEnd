import React from 'react'
import {Link }from 'react-router-dom'
import '../../css/drawerTogglebutton.css'
const sideDrawer= props =>(
    <nav className="side-drawer">
        <ul>
        <li><Link to='/About' >About</Link></li>
            <li><Link to='/Profile' >Profile</Link></li>
            <li><Link to='/categories' >Categories</Link></li>
            <li><Link to='/login' >Sign in</Link></li>
        </ul>
    </nav>

);
export default sideDrawer;
