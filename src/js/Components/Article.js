import React, { Component } from 'react';
import store from '../../Store';
import Comments from '../Model/Comment'
import CommentList from '../Model/CommentList'
import '../../css/components/prueba.scss';
//import '../../css/articulo.scss';
import axios from 'axios';
import {getArticleFromCategory}  from '../DataProvider';
import { Navbar } from './NavBar';
import Category from './Category';



class Article extends Component {
  constructor() {
    super();
    this.state = {
      author:{},
      article: {}
    }
  }
  async componentDidMount() {
    const title = this.props.location.state.category;
    const category = this.props.location.state.name;
    const posts=await getArticleFromCategory(category,title);
    console.log(posts.comments);
    const author=posts.author;
    this.setState({ author });
    const article = posts;
          this.setState({ article });
  
      
  }

  render() {

    return (
      <div className="articulo">
        <Navbar />
        <section class="section-container">
        <div class="icon">
    <div class="calendar">
      25
      <div class="holes"></div>
      <div class="flip"></div>
    </div>
  </div>
          <section className="left-step">

            <h1>{this.state.article.title}</h1>
            <p class="author">{this.state.author.username}<br />Published on: 17th March, 2014.</p>
            <h2>{this.state.article.title}</h2>

            <p>{this.state.article.content}</p>
            <p class="pullquote">These new devices are radically transforming what is possible in digital visual design and this has radical implications for digital typography. </p>

            <p>{this.state.article.content}</p>
            
            <h2>COMMENTS</h2>
              
              <div className="comments-conatiner">
              <CommentList/>
            
              </div>
             
          </section>
          
          <div class="containe isActive">
    <div class="book">
        <div class="book-paper">
            <div class="book-paper-shadow"></div>
        </div>
    </div>
    <div class="book">
        <div class="book-paper">
            <div class="book-paper-shadow"></div>
        </div>
    </div>
    <div class="book">
        <div class="book-paper">
            <div class="book-paper-shadow"></div>
        </div>
    </div>
</div>
        </section>
      </div>

    );
  }

  addArticule(article) {
    store.dispatch({
      type: "Add_Articule",
      article

    })
  }





}
export default Article;
