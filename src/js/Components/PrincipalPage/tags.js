import React,{Component} from 'react'
import {getAllCategories} from '../../DataProvider'
export default class TagList extends Component{
    constructor(){
        super();
        this.state={
            tagsList:[],
            color:["orange","red","blue"]
        }
    }
    async componentDidMount (){
        const post= await getAllCategories("categories")
        this.setState({tagsList:post})
    }
    render(){
        var min = 0;
        var max = 3;
        const {title,refe}=this.props;
	    var rand =  min + (Math.random() * (max-min));
        var random=Math.floor(rand);
        const color= this.state.color[random]
        return(

                 <a href={refe} className={"tag tag-"+color}> {title}</a>
               
        )
    }
}