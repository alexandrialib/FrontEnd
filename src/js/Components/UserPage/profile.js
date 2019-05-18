import React,{Component} from 'react'
import Navbar from '../NavBar';
import {getUserbyUsername, getCategoryByName} from '../../DataProvider'
import Card from '../Cards'
import Modal from 'react-bootstrap/Modal'
import '../../../css/UserPage/profile.scss'
import {Link} from 'react-router-dom'
import CategoryBox from './TeacherComponents/CategoryBox';


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
        const pass = this.props.location.state.pass;
        const postPopular= await getCategoryByName("Sort");
        const artCat=postPopular.articles
        this.setState({clave:pass})
        this.setState({articulosSuscritos:artCat})      
            const post =await getUserbyUsername(this.props.location.state.user,this.props.location.state.pass).catch(console.log());          
            this.setState({user:post})
  
    }
    render(){
       // if(this.state.user.){window.location="http://localhost:3000/singin"}
        return(
            <div className="App">
                <Navbar/>
<section className="profile-div">     
<div className="container-profile">
   <div className="profile-picture"></div>
 

   <div className="profile-name">
      <h1 className="pname">{this.state.user.name}</h1>
      <span className="badge badge-pro">PRO</span>
   </div>
   <div className="profile-caption">
      <p className="uname">@{this.state.user.username}</p>
   </div>
   <div className="profile-location">
      <span className="location">{this.state.user.email}</span>
  
   </div>
   <div className="buttonArticle">
                <p><button className="btn-right"><Link style={{color:"white"}}to={{pathname:'/newArticle',
                state:{user:this.state.user.username,pass:this.state.clave}
            }}>+ ARTICLE </Link></button></p>
                <p><button className="btn-left" onClick={this.handleShow}><a>+ CATEGORY</a></button></p>
                
                </div>
                

</div>
<div className="content-profile">

{this.state.articulosSuscritos.map((keys,i) =>
              <Card key={i}
              title={keys.title}
              tags={["Sort"]}
              refe={"/categories/Sort/articles/"+keys.name}
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
              />
              )} </div>
              <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new category</Modal.Title>
          </Modal.Header>
          <Modal.Body><CategoryBox /></Modal.Body>
          
        </Modal>
</section>
</div>
        )
    }

}