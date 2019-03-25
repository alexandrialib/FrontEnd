import React,{Component} from 'react';

import '../../css/Article.css';

import axios from 'axios';

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
                 <a href={'/'+key.name}>ver</a>
              
                 
                  </article>
                )}
              </div> 
            )
          }
}