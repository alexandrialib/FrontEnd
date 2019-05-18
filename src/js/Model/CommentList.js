import React,{Component} from 'react';
import Comment from './Comment'

import '../../css/knowledgeBase/commentList.css'
export default class CommentList extends Component {
	
  constructor(props) {
   super(props);
  }
 
  render(){
   
   let commentNodes = this.props.data.map((comment,i)=>{
     return (
       <Comment author={comment.author} key={i}>
         {comment.content}
       </Comment>
     );
   });
      
   return (
     <div className="infos">
       {commentNodes}
     </div>
    );	
  }
  
 }