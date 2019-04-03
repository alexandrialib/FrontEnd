import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import '../../css/Article.css';
import ArticleList from './ArticleList';
import '../../css/dashboard.css'
import { Navbar } from './NavBar';
import axios from 'axios';
import {getAllCategories} from '../DataProvider';


export default class Categories extends Component{
    constructor(){
        super();
        const url= "http://alexandria-lib-back.herokuapp.com/categories/";
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
              <div className="home">
              <Navbar/>
              <div className="recipe-card content">
                {this.state.categories.map(key=>
                   <div className="recipe-card-content">
                 <h2 className="recipe-title">{key.name}</h2>
                 <a href={'/categories/'+key.name} >See</a>
              
                 </div>
                )}</div>
              </div> 
            )
          }
}