import React,{Component} from 'react'
import Navbar from '../NavBar';
import {getUserbyUsername, getArticleFromCategory, getCategoryByName} from '../../DataProvider'
import Notification from '../notification'

import Card from '../Cards'
import Modal from 'react-bootstrap/Modal'
import '../../../css/UserPage/profile.scss'

import {Link} from 'react-router-dom'


export default class profile extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            user:{},
            monitorias:[],
            sesionActiva:false,
            articulosSuscritos:[],clave:""
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
    async componentDidMount(){
       
        const user = this.props.location.state.user;
        const pass = this.props.location.state.pass;
        const postPopular= await getCategoryByName("Sort");
        const artCat=postPopular.articles
        this.setState({clave:pass})
        this.setState({articulosSuscritos:artCat})      
            const post =await getUserbyUsername(this.props.location.state.user,this.props.location.state.pass);          
            this.setState({user:post})
  
    }
    render(){
        
        return(
            <div className="App">
                <Navbar/>
<section>     
<div className="container-profile">
   <div class="profile-picture"></div>
 

   <div class="profile-name">
      <h1 class="pname">{this.state.user.name}</h1>
      <span class="badge badge-pro">PRO</span>
   </div>
   <div class="profile-caption">
      <p class="uname">@{this.state.user.username}</p>
   </div>
   <div class="profile-location">
      <span class="location">{this.state.user.email}</span>
  
   </div>
   <div className="buttonArticle">
                <p><button class="btn-right"><a><Link style={{color:"white"}}to={{pathname:'/newArticle',
                state:{user:this.state.username,pass:this.state.password}
            }}>+ ARTICLE </Link></a></button></p>
                <p><button class="btn-left" onClick={this.handleShow}><a>+ CATEGORY</a></button></p>
                
                </div>
                

</div>
<div class="content-profile">

{this.state.articulosSuscritos.map(key =>
              <Card
              title={key.title}
              tags={["Sort"]}
              refe={"/categories/Sort/articles/"+key.name}
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
              />
              )} </div>
              <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
         
            <p><button class="btn-left" onClick={this.handleClose}><a>post</a></button></p>
           
          </Modal.Footer>
        </Modal>
</section>
</div>
        )
    }

}