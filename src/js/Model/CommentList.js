import React,{Component} from 'react';
import Comment from './Comment'
import '../../css/title.scss'
import '../../css/knowledgeBase/commentList.css'
export default class CommentList extends React.Component {
	
  constructor(props) {
   super(props);
  }
 
  render(){
   
   let commentNodes = this.props.data.map((comment)=>{
     return (
       <Comment author={comment.author} key={comment.id}>
         {comment.content}
       </Comment>
     );
   });
      
   return (
     <div className="commentList">
       {commentNodes}
     </div>
    );	
  }
  
 }