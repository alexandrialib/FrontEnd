import React,{Component} from 'react';
import '../../css/dashboard.css'
import { Navbar } from './NavBar';
import '../../css/Article.css';
import {Link} from 'react-router-dom'


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
              <div className="container">
              <Navbar/>
              <div>
              <h2 className="articleTitle">{this.state.name}</h2>
              </div>
              
                {this.state.categories.map(key=>
                  <article className="article">
                 <h2 className="articleTitle">{key.title}</h2>
                 <a href={'/categories/Sort/articles/'+key.title} >See</a>
                 <button className="recipe-buttons">
                <Link to={{pathname:'/categories/'+this.state.name+'/articles/'+key.title,
                state:{category:key.title,name:this.state.name}
            }}>View Category</Link>
                </button>
                 

        
                  </article>
                )}
              </div> 
            )
      
          }
}