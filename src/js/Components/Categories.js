import React,{Component} from 'react';
import store from '../../Store';
import '../../css/Article.css';
import Article from './Article';

import ReactDOM from 'react-dom';
export default class Categories extends Component{
    constructor(){
        super();
        this.state={
          categories:[]
        }
      }

    componentDidMount(){
    
      fetch('http://alexandria-lib-back.herokuapp.com/categories').then((Response)=> Response.json())
      .then(category =>{
       this.setState({
        categories:category
       })
      })
    }
    
    render(){ 
            return (
              <div className="container">
                {this.state.categories.map(key=>
                  <article className="categories">
                 <h2 className="categoryName">{key.name}</h2>
                 <a href="/">ver</a> 
                  </article>
                  
                )}
                
              </div> 
            )
          }
}