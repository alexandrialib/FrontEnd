import React from 'react'
import '../../css/Home.css'
import '../../css/Article.css';
import { Navbar } from './NavBar';
import {articleList} from './ArticleList';
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import {ProjectList} from './ProjectList'
const axios = require('axios');

export default class Home extends React.Component{
  
  render() {
    

    const menuItems = [
      {
        key:"2",
        object:"Categories",
        src:"/"
      },
      {
        key:"3",
        object:"About",
        src:"/"
      },
      {
        key:"3",
        object:"Categories",
        src:"/categories"
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
      }
    ]
      
      var menu = menuItems.map(x=>
      <div key={x.key} className="menu-item"><Link to = {x.src} >{x.object}</Link></div>
      )
      
       /*  console.log(temporal) */
    document.body.id="";
    return (
      <div>
        <Navbar menu={menu}/>
        <h1 style={{textAlign:"center",marginTop:100}}>Alexandria</h1>
        <articleList></articleList>
       {/*  <ProjectList project={temporal}/> */}
      </div>
    );
  }    

}