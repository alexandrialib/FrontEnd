import React, { Component } from 'react';
import store from '../../Store';
import CommentBox from '../Model/CommentBox'
import '../../css/components/prueba.scss';
import {getArticleFromCategory}  from '../DataProvider';
import { Navbar } from './NavBar';
class Article extends Component {
  constructor() {
    super();
    this.state = {
      author:{},
      article: {},
      urlComments:""
    }
  }
  async componentDidMount() {
    const title = this.props.location.state.category;
    const category = this.props.location.state.name;
    const url=category+"/articles/"+title;
    const posts=await getArticleFromCategory(category,title);
    const author=posts.author;
    this.setState({ author });
    const article = posts;
          this.setState({ article });
          this.setState({urlComments:url});
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
            <h2 className="formatArt">{this.state.article.title}</h2>

            <p>{this.state.article.content}</p>
            <p class="pullquote">These new devices are radically transforming what is possible in digital visual design and this has radical implications for digital typography. </p>

            <p>{this.state.article.content}</p>
            
            <h2 className="formatArt">COMMENTS</h2>
            
              <div id="comentarios">
              <CommentBox url={this.state.urlComments} pollInterval={2000} />
            
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
