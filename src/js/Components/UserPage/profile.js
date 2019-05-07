import React,{Component} from 'react'
import Navbar from '../NavBar';
import {getUserbyUsername} from '../../DataProvider'
import Notification from '../notification'
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
                <div>{this.state.user.username}</div>
                <div>
                    <Notification />
                </div>
            
            </div>
        )
    }

}