import React,{Component} from 'react';
import '../../css/components/Card.scss';

export default class Card extends Component{
    render(){
        const {title, img,author,content,refe} = this.props;
        const tags = this.props.tags.map((ing, index) => (
                <li key={index}>{ing}</li>
            ));
        return(
            
            <div className="blog-card">
            <div className="meta">
              <div className="photo" style={{backgroundImage:"url(" + img + ")"}}></div>
              <ul className="details">
                <li className="author"><a href="#">John Doe</a></li>
                <li className="date">Aug. 24, 2015</li>
                <li className="tags">
                  <ul>
                    {tags}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="description">
            <h1>{title}</h1>
      <h2>Opening a door to the future</h2>
      <p> {content}</p>
    <p className="read-more">
        <a href={refe}>Read More</a>
      </p>
  </div>
             
         
          </div>
         
          )


    }

}