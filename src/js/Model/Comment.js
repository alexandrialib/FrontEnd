import React,{Component} from 'react';
import '../../css/knowledgeBase/commentList.css';

export default class Comment extends Component{
    render(){
        const {date,like,author,content,imgProfile} = this.props;
      
        return(
           
                	<ul id="messages">


<li>
    <div class="infos">
        <img src="http://farm5.staticflickr.com/4136/4817542998_55a7eb8d8b_q.jpg" alt="" title="by tresMunkeys" />
    
        <a href="https://github.com/arbaoui-mehdi" class="sprite github">github.com/</a>
    </div>
    <div class="co-content">
        <h3>
            Author name
            <b>Date</b>
        </h3>
        <p>
            Etiam iaculis, ipsum sit amet scelerisque dictum, diam justo suscipit mauris, a laciniet nunc eu massa fermentum feugiat.
        </p>
    </div>
</li></ul>
                
         
        )
    }
}