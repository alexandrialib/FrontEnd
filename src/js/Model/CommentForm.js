import React,{Component} from 'react';
import {getDOMNode} from 'react-dom';
import axios from 'axios'
export default class CommentForm extends React.Component {
	
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
		
		 var text 		= this.state.content.trim();
		 if (!text) {
			 return;
		 }
		 this.props.onCommentSubmit({author: {username:"Anonymus"}, content: text});
		 this.setState({content: ''});
	 }	
 
	render(){
	 return (
		 <form className="commentForm" onSubmit={(e) => this.handleSubmit(e)}> 
		
			 <input
			 	className="input-content"
				 type="text"
				 placeholder="Leave a comment"
				 value={this.state.content}
				 onChange={(e) => this.handleTextChange(e)} 
			 /> 
			 <input type="submit" className="boton" value="Post" />
		 </form>
	 );	
	}
	
 }