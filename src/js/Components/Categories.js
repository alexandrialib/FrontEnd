import React,{Component} from 'react';
import '../../css/Article.css';

import { Navbar } from './NavBar';
import Category from './Category';
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
              <div className="App">
                  <Navbar/>
     
                  <section class="section-container">
              
                
                    {this.state.categories.map(key=>
                      <Category 
                      title={key.name}
                    ingredients={key.articles.map(a=>
                      a.title)}
                  />
                    )}
               
                </section>
              </div> 
            )
          }
} 