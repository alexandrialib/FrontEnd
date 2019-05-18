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

    render(){
        return(
           
                 <NewArticleForm  />
                 
        
        )
    }

}
/*0bb4a6 */