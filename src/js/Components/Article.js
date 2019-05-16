import React, { Component } from 'react';
import store from '../../Store';
import CommentBox from '../Model/CommentBox'
import '../../css/components/prueba.scss';
import {getArticleFromCategory}  from '../DataProvider';
import Navbar  from './NavBar';
import Markdown from 'react-markdown'

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
    //const title = this.props.location.state.category;
    //const category = this.props.location.state.name;
    const articleUrl= window.location.pathname;
   var urlsplit = articleUrl.split("/");
 //  console.log(urlsplit)
  
    const url=articleUrl;
    const posts=await getArticleFromCategory(urlsplit[2],urlsplit[4]);
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
            <Markdown 
            source= {this.state.article.content}
            />
            <h2 className="formatArt">COMMENTS</h2>
              <CommentBox url={this.state.urlComments} pollInterval={2000} />
          </section>
          
         
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
