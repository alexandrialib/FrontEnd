import React,{Component} from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import '../../css/knowledgeBase/commentList.css'
import {getAllCommentsByArticle,postCommentInArticle}  from '../DataProvider';

export default class CommentBox extends Component {
	
	constructor(props) {
	super(props);
	this.init();     
	}
   
	init(){
	  this.state = {data: []};
	}
	async loadCommentsFromServer() {
	
		const posts=await getAllCommentsByArticle(window.location.pathname);
		console.log(posts)
    
    this.setState({data: posts});

	}
	
	handleCommentSubmit(comment) {
	  let comments = this.state.data;
	  var url=this.props.url;
	console.log("handle"+url)

	  var newComments = comments.concat([comment]);
	  this.setState({data: newComments});  
	  postCommentInArticle(comment,url);  
	}  
  
  
   componentDidMount() {
	  this.loadCommentsFromServer();
	  setInterval(()=>this.loadCommentsFromServer, this.props.pollInterval);      
	}
  
  
   render(){
	   return (
		<div  id="messages">
	
		  <CommentForm onCommentSubmit={comment => this.handleCommentSubmit(comment)} />
		  <CommentList data={this.state.data} />
		</div>
	  );
   }
   
  }