import React,{Component} from 'react';
import '../../css/dashboard.css'
import { Navbar } from './NavBar';

import {Link} from 'react-router-dom'
import '../../css/titleBadges.scss'

import '../../css/components/sticky.scss';
const url= "http://alexandria-lib-back.herokuapp.com/categories/";
export default class ArticlelList extends Component{
    constructor(){
        super();
        this.state={
          name:"",
          categories:[]
        }
      }

    componentDidMount(){
      const title=this.props.location.state.category;
      fetch('http://alexandria-lib-back.herokuapp.com/categories/'+title).then((Response)=> Response.json())
      .then(category =>{
       this.setState({
         name:category.name,
        categories:category.articles
       })
      })
    }
    
    render(){ 
      
            return (
              <div className="App">
              <Navbar/>
            
            
              <section class="section-container">
                {this.state.categories.map(key=>
                <div class="note-container contai">
                <div class="sticky-note sticky-note-one" >{key.title}
                <button class="subtitle small-btn"><Link style={{color:"black"}}to={{pathname:'/categories/'+this.state.name+'/articles/'+key.title,
                state:{category:key.title,name:this.state.name}
                      }}>View </Link></button>
                </div>
              </div>


 
                )}</section>
              </div> 
            )
      
          }
}
