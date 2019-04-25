import React,{Component} from 'react';
import '../../css/Article.css';
import '../../css/components/sticky.scss';
import {URL} from '../DataProvider'

import { Navbar } from './NavBar';
import Category from './Category';
import {getAllCategories} from '../DataProvider';

const url = URL+"/categories/";
export default class Categories extends Component{
    constructor(){
        super();
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
              
                <div className="contai">
                    {this.state.categories.map(key=>
                      <Category 
                      title={key.name}
                    ingredients={key.articles.map(a=>
                      a.title)}
                  />
                    )}</div>
               
                </section>
              </div> 
            )
          }
} 