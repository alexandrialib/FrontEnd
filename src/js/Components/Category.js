import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/titleBadges.scss'
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
      
<div class="badgee gray">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
		<path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"/>
</svg>
  <p class="title">{title}</p>
  <button class="subtitle small-btn"><Link style={{color:"white"}}to={{pathname:'/categories/'+title,
                state:{category:title}
            }}>View </Link></button>
 
</div>

        );
    }

}

