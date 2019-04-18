import React,{Component} from 'react';
import '../../css/components/Card.scss';

export default class Card extends Component{
    render(){
        const {title, img,author,content} = this.props;
        const tags = this.props.tags.map((ing, index) => (
                <li key={index}>{ing}</li>
            ));
        return(
            
            <div class="blog-card">
            <div class="meta">
              <div class="photo" style={{backgroundImage:"url(" + img + ")"}}></div>
              <ul class="details">
                <li class="author"><a href="#">John Doe</a></li>
                <li class="date">Aug. 24, 2015</li>
                <li class="tags">
                  <ul>
                    {tags}
                  </ul>
                </li>
              </ul>
            </div>
            <div class="description">
            <h1>{title}</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
    <p class="read-more">
        <a href="#">Read More</a>
      </p>
  </div>
             
         
          </div>
         
          )


    }

}