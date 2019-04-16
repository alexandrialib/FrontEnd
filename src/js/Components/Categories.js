import React,{Component} from 'react';
import '../../css/Article.css';
import '../../css/title.scss'
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
              <div className="home">
                  <Navbar/>
     
                <div className="container">
        

        <div id="dust">
</div>
<div class="titleHome">
 <h1>
   <div>
     <span></span> 
     Categories
     <span></span>
   </div>
  
 </h1>

</div>
</div>
                <div className="app">
                  <div className="container">
                
                    {this.state.categories.map(key=>
                      <Category 
                      title={key.name}
                    ingredients={key.articles.map(a=>
                      a.title)}
                  />
                    )}
                    </div>
                </div>
              </div> 
            )
          }
}