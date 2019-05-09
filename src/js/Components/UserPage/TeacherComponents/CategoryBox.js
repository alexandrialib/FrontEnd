import React,{Component} from 'react'
import {postCategory,getCategoryByName} from '../../../DataProvider'
import CategoryForm from './CategoryForm'
import Notification from '../../notification'
import '../../../../css/UserPage/categoryPost.scss'
export default class CategoryBox extends Component{
    
    constructor(){
        super();
        this.state={
            name:"",
            type:"",
            message:""
        }
    }
    async addCategory(category){
        console.log("esto no sirve"+ category.content)
        postCategory(category.content,"hola");
        const post= await getCategoryByName(category);
        if(post.name===category){
            this.setState({name:category,type:"success", message:"Category "+category+" was added."})
        }
        else{
            this.setState({name:category,type:"danger", message:"Category "+category+" was not added."})    
        }
       
    }

    render(){
        return(
            <div className="app">
                 <CategoryForm onCommentSubmit={category => this.addCategory(category)} />
            </div>
        )
    }
}