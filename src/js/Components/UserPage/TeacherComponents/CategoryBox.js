import React,{Component} from 'react'
import {postCategory,getCategoryByName} from '../../../DataProvider'
import CategoryForm from './CategoryForm'
import Notification from '../../notification'
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
        postCategory(category);
        const post= await getCategoryByName(category);
        if(post.name===category){
            this.setState({name:category,type:"success", message:"Category "+category+" was added."})
        }
        else{
            this.setState({name:category,type:"danger", message:"Category "+category+" was not added."})    
        }
        <Notification addNotification={}/>
    }

    render(){
        return(
            <div className="App">
                 <CategoryForm onCommentSubmit={category => this.addCategory(category)} />
            </div>
        )
    }
}