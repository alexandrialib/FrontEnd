import React from 'react'
import '../../css/Home.css'
import { Navbar } from './NavBar';
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom';
import {ProjectList} from './ProjectList'
export default class Home extends React.Component{
  
  render() {
    const menuItems = [
      {
        key:"2",
        object:"Home",
        src:"/"
      },
      {
        key:"3",
        object:"About",
        src:"/"
      },
      {
        key:"3",
        object:"About",
        src:"/"
      },
      {
        key:"1",
        object:<img className="bar-logo" src = {logo} alt="logo"/>,
        src:"/"
      },
      {
        key:"3",
        object:"About",
        src:"/"
      },
      {
        key:"4",
        object:"Profile",
        src:"/"
      },
      {
        key:"5",
        object:"Login",
        src:"/login"
      }]
      var menu = menuItems.map(x=>
      <div key={x.key} className="menu-item"><Link to = {x.src} >{x.object}</Link></div>
      )
      
    document.body.id="";
    return (
      <div>
        <Navbar menu={menu}/>
        <ProjectList/>
      </div>
    );
  }    

}