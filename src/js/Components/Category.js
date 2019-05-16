import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/titleBadges.scss'
import '../../css/components/sticky.scss';


export default class Category extends Component{
    render(){

        const {title} = this.props;
        
        return (
           
<div className="note-container">
      <div className="sticky-note sticky-note-one" >{title}
      <button className="subtitle small-btn"><Link style={{color:"black"}}to={{pathname:'/categories/'+title,
                state:{category:title}
            }}>View </Link></button>
      </div>
    </div>
   


        );
    }

}

