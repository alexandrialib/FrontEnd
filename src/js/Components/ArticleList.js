import React,{Component} from 'react';
import '../../css/dashboard.css'
import { Navbar } from './NavBar';
import '../../css/Article.css';
import {Link} from 'react-router-dom'
import '../../css/titleBadges.scss'
import '../../css/title.scss'

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
              <div className="articleList">
              <Navbar/>
            
            
              <section class="section-container">
                {this.state.categories.map(key=>

<div class="badgee gray">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
  <path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
</svg>
<p class="title">{key.title}</p>
<button class="subtitle small-btn"><Link style={{color:"white"}}to={{pathname:'/categories/'+this.state.name+'/articles/'+key.title,
                state:{category:key.title,name:this.state.name}
          }}>View </Link></button>

</div>
 
                )}</section>
              </div> 
            )
      
          }
}