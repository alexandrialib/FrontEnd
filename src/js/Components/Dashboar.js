import React,{Component} from 'react'
import '../../css/dashboard.css'
export default class Recipe extends Component {
    render () {
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
    }
}
