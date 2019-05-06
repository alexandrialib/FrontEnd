import React,{Component} from 'react';
import '../../css/knowledgeBase/commentList.css';

export default class Comment extends Component {
	
 constructor(props) {
  super(props);
  this.state={
	  random:0,
	  avatar:["http://farm5.staticflickr.com/4136/4817542998_55a7eb8d8b_q.jpg",
	  "http://farm3.staticflickr.com/2721/4531285963_cd28f61b16_q.jpg",
	  "http://farm3.staticflickr.com/2617/3873098259_61c446da22_q.jpg",
	  "http://farm4.staticflickr.com/3412/3446830982_c8b55cc7e8_q.jpg" ,
	  "http://farm4.staticflickr.com/3588/3663734351_f9cb5a6a56_q.jpg" ]
  }
 }
 componentDidMount(){
	var min = 0;
	var max = 4;
	var rand =  min + (Math.random() * (max-min));
	var random=Math.floor(rand);
	this.setState({random:random});

 }

 render(){

	return (
	
		<div className=" infos">
		  <img src={this.state.avatar[this.state.random]} alt="" title="by tresMunkeys" />
     <a href="https://github.com/" class="sprite github">github</a>
		<div className=" co-content">
			<h2 className="commentAuthor">
                {this.props.author.username}
             
			</h2>
			{this.props.children}
		</div></div>
   );
 }
 
}