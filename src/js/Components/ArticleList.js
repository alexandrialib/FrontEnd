import React,{Component} from 'react';
import '../../css/dashboard.css'
import { Navbar } from './NavBar';
import '../../css/Article.css';

const url= "http://alexandria-lib-back.herokuapp.com/categories/";
export default class ArticlelList extends Component{
    constructor(){
        super();
        this.state={
          categories:[]
        }
      }
      setUrl(path){
        url=url+path;
      }
    componentDidMount(){
    
      fetch('http://alexandria-lib-back.herokuapp.com/categories/Sort').then((Response)=> Response.json())
      .then(category =>{
       this.setState({
        categories:category.articles
       })
      })
    }
    
    render(){ 
      
            return (
              <div className="container">
              <Navbar/>
                {this.state.categories.map(key=>
                  <article className="article">
                 <h2 className="articleTitle">{key.title}</h2>
        
                  </article>
                )}
              </div> 
            )
      
          }
}