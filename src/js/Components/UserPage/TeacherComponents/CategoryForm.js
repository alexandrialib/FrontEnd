import React,{Component} from 'react'
import '../../../../css/UserPage/categoryPost.scss'
export default class CategoryForm extends Component{
    constructor(props) {
        super(props);
        this.init();
       }
       
       init(){
           this.state = {content : ''};
       }
       
   
        
        handleTextChange(e) {
            this.setState({content: e.target.value});
        }
        
        handleSubmit(e) {
            e.preventDefault();
           
            var text= this.state.content.trim();
            if (!text) {
                return;
            }
            this.props.onCommentSubmit({content: text});
            this.setState({content: ''});
        }	
    
       render(){
        return (
            <form  onSubmit={(e) => this.handleSubmit(e)}> 
           
                <input
                    className="inputCat"
                    type="text"
                    placeholder="write a category"
                    value={this.state.content}
                    onChange={(e) => this.handleTextChange(e)} 
                /> 
              
                <p><button type="submit" class="btn-right" ><a>Post</a></button></p>
            </form>
        );	
       }

}