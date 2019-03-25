import React,{Component} from 'react';

import '../../css/Article.css';

import {browserHistory,Redirect } from 'react-router';

export default class ArticlelList extends Component{
    constructor(){
        super();
        this.state={
          categories:[]
        }
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
                {this.state.categories.map(key=>
                  <article className="article">
                 <h2 className="articleTitle">{key.title}</h2>
        
                  </article>
                )}
              </div> 
            )
          }
}