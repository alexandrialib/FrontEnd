import React,{Component} from 'react';
import '../../css/knowledgeBase/commentList.css';
import {getAllCommentsByArticle,postCommentInArticle} from '../DataProvider'
//import marked				from 'marked';

export default class Comment extends React.Component {
	
 constructor(props) {
  super(props);
 }


 

 render(){
	return (
		<div className="comment">
			<h2 className="commentAuthor">
                {this.props.author.username}
             
			</h2>
			{this.props.children}
		</div>
   );
 }
 
}