import React, {Component} from 'react';
import store from '../../Store';
import '../../css/Article.css';
import axios from 'axios';




class Article extends Component{
    constructor(){ 
      super();
      this.state={
        article:{}
      }
    }
    componentDidMount(){
    
      axios.get(`http://alexandria-lib-back.herokuapp.com/categories/Sort/articles/Quick`)
        .then(res => {
          const article = res.data;
          this.setState({ article });
        })
    
    }

    render(){
      
      return (
        
        <article id="articleFormat">
          <section class="article-content">
          <h2 class="headline">{this.state.article.title}</h2>
          </section>



                 <h3 className="subheadline">{this.state.article.title}</h3>
                 <span>
                 <blockquote>
                   {this.state.article.content}
                 </blockquote>
                 </span>
                
        </article>
       
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