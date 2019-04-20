import React,{Component} from 'react';
import '../../css/knowledgeBase/commentList.css';
import {getAllCommentsByArticle,postCommentInArticle} from '../DataProvider'
export default class Comment extends Component{
    constructor(){
        super();
        this.state={
            comments:{},
            author:{},
            date:""
        }
    }
    async componentDidMount(){
        const posts=await getAllCommentsByArticle("Quick");
        const po=await postCommentInArticle();
        const comments=posts[0];const author=comments.author;const date=comments.date[0];
        console.log(comments.date);
        this.setState({comments});
        this.setState({author});
        this.setState({date});

    }
    render(){
        const {date,like,author,content,imgProfile} = this.props;
      
        return(
           
                	<ul id="messages">


                    <li>
    <div class="infos">
        <img src="http://farm5.staticflickr.com/4136/4817542998_55a7eb8d8b_q.jpg" alt="" title="by tresMunkeys" />
    
        <a href="https://github.com/" class="sprite github">github.com/</a>
    </div>
    <div class="co-content">
        <h3>
        {this.state.author.username}
            <b>{this.state.date}</b>
        </h3>
        <p>
            {this.state.comments.content}



        </p>
    </div>
</li></ul>
                
         
        )
    }
}