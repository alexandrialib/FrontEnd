import React,{Component} from 'react'

import {postArticle} from '../../../../DataProvider'
import '../../../../../css/UserPage/formNewArticle.scss'
export default class newArticleForm extends Component{
    constructor(props) {
        super(props);
        this.init();
       }
       init(){
           this.state = {
               title :"",
               categoryList:[],
               category:""

            };
       }
      
       
   
        
        handleTextChange(e) {
            this.setState({title: e.target.value});
        }
        handleText1Change(e) {
            this.setState({category: e.target.value});
        }
        
        handleSubmit(e) {
            e.preventDefault();
           
            var text= this.state.title.trim();
            var text1= this.state.category.trim();
            if (!text || !text1) {
                return;
            }
            this.props.onCommentSubmit({title: text,category:text1});
            this.setState({title: '',category:''});
        }	 
        
        
    
       render(){
        return (
            
            <div className="wrapper">
			
			<div className="signin">
            
               
				<form   onSubmit={(e) => this.handleSubmit(e)}>
				  <div className="input-group">
                  <input
                    className="inputCat"
                    type="text"
                    placeholder="write a category"
                    value={this.state.category}
                    onChange={(e) => this.handleText1Change(e)} 
                /> 
				   
				  </div>
				  <div className="input-group">
                  <input
                    className="inputCat"
                    type="text"
                    placeholder="write a title"
                    value={this.state.title}
                    onChange={(e) => this.handleTextChange(e)} 
                /> 
				    
				  </div>
				  <input type="submit" className="btn-right"/>
				</form>
			</div>
	</div>

        );	
       }
    
}