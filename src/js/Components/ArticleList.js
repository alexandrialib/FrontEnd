import React,{Component} from 'react';
import '../../css/dashboard.css'
import { Navbar } from './NavBar';
import {URL} from '../DataProvider'

import {Link} from 'react-router-dom'
import '../../css/titleBadges.scss'

import '../../css/components/sticky.scss';
const url= URL;
export default class ArticlelList extends Component{
    constructor(){
        super();
        this.state={
          name:"",
          categories:[]
        }
      }

    componentDidMount(){
      const tm=window.location.pathname
      fetch(url+tm).then((Response)=> Response.json())
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
              <div className="contai">
                {this.state.categories.map(key=>
                <div class="note-container">
                  <div class="sticky-note sticky-note-one" >{key.title}
                  <button class="subtitle small-btn"><Link style={{color:"black"}}to={{pathname:'/categories/'+this.state.name+'/articles/'+key.title,
                  state:{category:key.title,name:this.state.name}
                      }}>View </Link></button>
                </div>
              </div>

                )}
                </div>
                </section>
              </div> 
            )
      
          }
}
