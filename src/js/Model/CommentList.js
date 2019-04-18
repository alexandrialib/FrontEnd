import React,{Component} from 'react';
import Comment from './Comment'
import '../../css/title.scss'
import '../../css/knowledgeBase/commentList.css'
export default class CommmentList extends Component{
 
    
    render(){
        return (
    
             
    <div class="App">
      
        <form action="" class="form">
        <div>
      <label class="form__label" for="todo">~ COMMENTS ~</label>
      <input class="form__input"
           type="text" 
           id="comment" 
         
           placeholder="say something"
           required/>
      <button type="submit" class="btn"><span>POST</span></button>
    </div>
          
        </form>
  
      <ul class="comments co-content" id="comments">
    
      </ul>
    </div>
 
      
        )   
    }
}