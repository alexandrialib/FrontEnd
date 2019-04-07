import React, {Component} from 'react';
import store from '../../Store';

import '../../css/articulo.scss';
import axios from 'axios';
import { Navbar } from './NavBar';



class Article extends Component{
    constructor(){ 
      super();
      this.state={
        article:{}
      }
    }
    componentDidMount(){
      const title=this.props.location.state.category;
      const category=this.props.location.state.name;
      axios.get(`http://alexandria-lib-back.herokuapp.com/categories/`+category+'/articles/'+title)
        .then(res => {
          const article = res.data;
          this.setState({ article });
        })
    
    }

    render(){
      
      return (
        <div>
          <div className="container">
          <Navbar/></div>
          <div class="container">
        <section class="container">
        <header>
          <h1>{this.state.article.title}</h1>
          <p class="date">
            By <a >Mads Håkansson</a> 
            On <a >May 14th 2014</a> 
            In <a >News</a>
          </p>
        </header>
        
        <article>
  
  
          <blockquote>
{this.state.article.content}
            <cite>John doe</cite>
          </blockquote>
          
          
          <a href="alexandria-lib-front.herokuapp.com/" class="btn">Back Home</a>
        </article>
      </section></div></div>

      );
    }

    addArticule(article){
        store.dispatch({
            type:"Add_Articule",
            article

        })
    }
     




}
export default Article;