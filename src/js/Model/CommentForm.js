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
				 type="text"
				 placeholder="Say something..."
				 value={this.state.content}
				 onChange={(e) => this.handleTextChange(e)} 
			 /> 
			 <input type="submit" value="Post" />
		 </form>
	 );	
	}
	
 }