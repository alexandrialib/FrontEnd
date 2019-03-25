import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../../css/Article.css';
import ArticleList from './ArticleList';
import {Link} from 'react-router-dom';
import axios from 'axios';
const path=(match)=>{
  
//<Route path={`${match.path}/:id`} component={ArticleList}/>
}
export default class Categories extends Component{
    constructor(){
        super();
        this.state={
          categories:[]
        }
      }

    componentDidMount(){
        axios.get(`http://alexandria-lib-back.herokuapp.com/categories`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
        })
    
  
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