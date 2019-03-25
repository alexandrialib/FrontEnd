import React,{Component} from 'react';
import store from '../../Store';
import '../../css/Article.css';
import Article from './Article';

import ReactDOM from 'react-dom';
export default class ArticlelList extends Component{
    constructor(){
        super();
      var holo ={};
        this.state={
          /*articles: 
            [ {
              "color": "FEC006",
              "title": "Merge",
              "thumbnail": "",
              "category": "ordenamiento",
              "excerpt": " algoritmo de ordenamiento",
              "date": new Date()
            
          }],*/
          categories:[]

        
      
        }
      }

    componentDidMount(){
    
      fetch('http://alexandria-lib-back.herokuapp.com/categories/Sort').then((Response)=> Response.json())
      .then(category =>{
       console.log(category);
       this.setState({
         
         categories:category.articles
       })
       console.log("holi amiguitos");
        

      })
    }
    
    render(){ 
      
      
            return (
             
              <div className="container">
                {this.state.categories.map(key=>
                  <article className="article">
           
            <h2 className="article__title">{key.title}</h2>
            
          </article>


                )}

              </div>
             /* <div className="container">
                {this.state.articles.map(key=>
                  <article className="article">
            <h3 className="article__category" >{key.category}</h3>
            <h2 className="article__title">{key.title}</h2>
            <p className="article__excerpt">{key.excerpt}</p>
          </article>


                )}

              </div>*/
              
            )
          }
}
