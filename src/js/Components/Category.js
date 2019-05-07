import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/titleBadges.scss'
import '../../css/components/sticky.scss';


export default class Category extends Component{
    render(){

        const {title} = this.props;
        
        var  styles = {
            backgroundColor: '#FE5621' 
          };
        return (
           
<div class="note-container">
      <div class="sticky-note sticky-note-one" >{title}
      <button class="subtitle small-btn"><Link style={{color:"black"}}to={{pathname:'/categories/'+title,
                state:{category:title}
            }}>View </Link></button>
      </div>
    </div>
   


        );
    }

}

