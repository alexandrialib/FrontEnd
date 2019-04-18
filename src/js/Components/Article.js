import React, { Component } from 'react';
import store from '../../Store';
import Comments from '../Model/Comment'
import CommentList from '../Model/CommentList'
import '../../css/components/prueba.scss';
//import '../../css/articulo.scss';
import axios from 'axios';
import { Navbar } from './NavBar';



class Article extends Component {
  constructor() {
    super();
    this.state = {
      article: {}
    }
  }
  componentDidMount() {
    const title = this.props.location.state.category;
    const category = this.props.location.state.name;
    axios.get(`http://alexandria-lib-back.herokuapp.com/categories/` + category + '/articles/' + title)
      .then(res => {
        const article = res.data;
        this.setState({ article });
      })

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
            <p class="author">by DOMINICK TURNBULL<br />Published on: 17th March, 2014.</p>
            <h2>{this.state.article.title}</h2>

            <p>{this.state.article.content}</p>
            <p class="pullquote">These new devices are radically transforming what is possible in digital visual design and this has radical implications for digital typography. </p>

            <p>{this.state.article.content}</p>
            
            <h2>COMMENTS</h2>
              
              <div className="comments-conatiner">
              <CommentList/>
              <Comments/>
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
/*
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


          <a class="btn">Back Home</a>
        </article>*/