import React,{Component} from 'react'
export default class Card extends Component{
    constructor(){
        super();
        this.state={
            relevantArticles:[],
            author={}
        }
    }
    async componentDidMount(){
        const post= await getCategoryByName("Sort");
        console.log(post);

    }

    render(){
        
        return(
            
       <div class="item post">
       {this.state.relevantArticles.map(key=>
       
        <div class="post-detail">
        <h2 class="title-article">{key.title}</h2>
        <div class="title-description"><span class="text-des">{author}</span><span class="time">{date}</span></div>
         <div class="post-content">{key.content}</div>
         <div class="bottom">
           <a href="#"><button class="read-more">Read more</button></a>
           <lable class="label-comment">
             Comment <span class="num-of-comment">{comments}</span>
           </lable>
         </div>
      </div>
       )}
     </div>
        )
    }
   

}