import React,{Component} from 'react'
import NewArticleForm from './newArticleForm'

export default class newArticleBox extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            type:"",
            message:""
        }
    }
    async addCategory(category){
        /*console.log("esto no sirve"+ category.content)
        postCategory(category.content,"hola");
        const post= await getCategoryByName(category);
        if(post.name===category){
            this.setState({name:category,type:"success", message:"Category "+category+" was added."})
        }
        else{
            this.setState({name:category,type:"danger", message:"Category "+category+" was not added."})    
        }*/
       
    }

    render(){
        return(
           
                 <NewArticleForm  />
                 
        
        )
    }

}
/*0bb4a6 */