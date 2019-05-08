import React,{Component} from 'react'
import Navbar from '../NavBar';
import {getUserbyUsername} from '../../DataProvider'
import Notification from '../notification'
import '../../../css/UserPage/profile.scss'
export default class profile extends Component{
    constructor(){
        super();
        this.state={
            user:{},
            monitorias:[],
            articulosSuscritos:[]
        }
    }
    async componentDidMount(){
        const post =await getUserbyUsername("user","user");
        console.log(post)
        this.setState({user:post})
    }
    render(){
        return(
            <div className="App">
                <Navbar/>
             

<link href='https://fonts.googleapis.com/css?family=Roboto:100,400,300,500,700' rel='stylesheet' type='text/css'/>

<div align="center" class="fond">

    <a href="www.wifeo.com">
    <div class="principal">
      <div class="principal_petit">
        <div class="principal_img">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/173024/img_scale_sociaux.png" border="0" align="center"/>
        </div>
      </div>
    </div>
  </a>

  <div className="cambio">{this.state.user.username} </div>
        
  
  
</div>


                <div>
                    <Notification />
                </div>
            
            </div>
        )
    }

}