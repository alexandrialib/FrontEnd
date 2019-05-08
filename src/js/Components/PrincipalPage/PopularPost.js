import React,{Component} from 'react'

export default class PopularPost extends Component{
    render(){
        const {title} = this.props;
        return(
            <li class="post-item">
            <img src="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">{title}</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
        )
    }
}