import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import '../../css/Article.css';
import ArticleList from './ArticleList';

import axios from 'axios';
import {getAllCategories} from '../DataProvider';
const path=(match)=>{
  
//<Route path={`${match.path}/:id`} component={ArticleList}/>
}
export default class Categories extends Component{
    constructor(){
        super();
        var path="";
        this.state={
          categories:[]
        }
      }

    async componentDidMount(){
      const posts=await getAllCategories("categories");
      console.log(posts.name);
      
        
          const categories = posts;
          this.setState({ categories });

    }
    
    render(){ 
      
            return (
              <div className="container">
                {this.state.categories.map(key=>
                  <article className="article">
                 <h2 className="articleTitle">{key.name}</h2>
                 <a href={'/categories/'+key.name}>See</a>
                 <div>
                   
                 <Route path={"/categories/"+key.name} component={ArticleList}/>
                 </div>

              
                 
                  </article>
                )}
              </div> 
            )
          }
}