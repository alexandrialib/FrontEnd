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

    componentWillMount(){
      console.log("hola");
      fetch('https://alexandria-lib-back.herokuapp.com/categories/Sort/articles').then(Response=> Response.json)
      .then(categories =>{
       
        categories.forEach(element => {
          let data={
            name:element.title,
            description:element.content
          }
          this.setState({categories:this.state.categories.concat([data])})
          
        });

      })
    }
    
    render(){ 
      
      
            return (
              <div className="container">
                {this.state.categories.map(key=>
                  <article className="article">
           
            <h2 className="article__title">{key.name}</h2>
            <p className="article__excerpt">{key.description}</p>
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
