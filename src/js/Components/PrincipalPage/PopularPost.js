import React,{Component} from 'react'
import '../../../css/home.css'
export default class PopularPost extends Component{
    render(){
        const {title} = this.props;
        return(
            <li className="post-item">
            <img src="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg" alt="Lorem" className="post-image"/>
            <div className="post-item-info">
              <h5 className="post-item-title">{title}</h5>
              <p className="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
        )
    }
}