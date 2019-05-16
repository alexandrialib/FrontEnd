import React,{Component} from 'react';
import '../../css/Article.css';
import '../../css/components/sticky.scss';
import  Navbar  from './NavBar';
import Category from './Category';
import {getAllCategories} from '../DataProvider';

export default class Categories extends Component{
    constructor(){
        super();
        this.state={
          categories:[]
        }
      }


    async componentDidMount(){
      const posts=await getAllCategories("categories");
          const categories = posts;
          this.setState({ categories });

    }
    
    render(){ 
      
            return (
              <div className="App">
                  <Navbar/>
     
                  <section className="section-container">
              
                <div className="contai">
                    {this.state.categories.map(key=>
                      <Category 
                      title={key.name}
                  />
                    )}</div>
               
                </section>
              </div> 
            )
          }
} 