import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/Article.css';
export default class Category extends Component{
    render(){

        const {title, img} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
            ));
        var  styles = {
            backgroundColor: '#FE5621' 
          };
        return (
        
        <div className="column">

            <article className="article">
                
                <div className="recipe-card-content">
                    <h3  className="article__category" style={styles}>{title}</h3>
                    <h2 className="article__title">Articles:</h2>
                    <a href={'/categories/Sort/articles/'+title} >See</a>
                    <ul>{ingredients}</ul>                  
                </div>
                <button className="recipe-buttons">
                <Link to={{pathname:'/categories/'+title,
                state:{category:title}
            }}>View Category</Link>
                </button>
            </article>
            
      </div>
        );
    }

}
/* render () {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
            ));
        return (
            <div className="recipe-card">
                <div className="recipe-card-image">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h2 className="recipe-title">{title}</h2>
                    <h2>Category:</h2>
                    <ul>{ingredients}</ul>
                    <h2>Description:</h2>
                    <p>{instructions}</p>
                </div>
            </div>
        );
    */