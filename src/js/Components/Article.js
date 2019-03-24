import React, {Component} from 'react';
import store from '../../Store';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
import '../../css/Article.css';




class Article extends Component{
    constructor(){ 
      return super();
    }

    render(){
      var details = this.props.details,
      styles = {
        backgroundColor: '#' + details.color
      };
      return (
        <article className="article">
          <h3 className="article__category" style={styles}>{details.category}</h3>
          <h2 className="article__title">{details.title}</h2>
          <p className="article__excerpt">{details.excerpt}</p>
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