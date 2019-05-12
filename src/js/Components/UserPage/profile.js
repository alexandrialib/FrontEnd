import React,{Component} from 'react'
import Navbar from '../NavBar';
import {getUserbyUsername, getArticleFromCategory, getCategoryByName} from '../../DataProvider'
import Notification from '../notification'
import ArticleBox from './MarkDown/postArticle/newArticleBox'
import CategoryBox from '../UserPage/TeacherComponents/CategoryBox'
import PopularPost from '../PrincipalPage/PopularPost'
import '../../../css/UserPage/profile.scss'
import '../../../css/home.css'


export default class profile extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{},
            monitorias:[],
            articulosSuscritos:[]
        }
    }
    async componentDidMount(){
        const user = this.props.location.state.user;
        const pass = this.props.location.state.pass;
        const postPopular= await getCategoryByName("Sort");
        const artCat=postPopular.articles
        console.log("hiiiiii")
        console.log(artCat)
        this.setState({articulosSuscritos:artCat})
        if(user==="user" && pass==="user"){
            console.log("")
            const post =await getUserbyUsername(this.props.location.state.user,this.props.location.state.pass);
            this.setState({user:post})
        }else{
            console.log("yaper")
        }
        /*   {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}*/
      
        
    }
    render(){
        return(
            <div className="App">
                <Navbar/>
                <div class="profile clearfix">
                    <div class="avatar-container">
                        <img class="avatar" src="http://farm3.staticflickr.com/2721/4531285963_cd28f61b16_q.jpg"/>
                        <div class="avatar-text">  
                            <h1>{this.state.user.username}</h1>
                            <h2>TEACHER</h2>
                        </div>
                    </div>
                </div>   
                <div className="post-it-art">
                <CategoryBox/>
                
                </div> 
                <div className="buttonArticle">
                <p><button class="btn-right"><a href="/newArticle">ADD ARTICLE</a></button></p>
                </div>
                
                
            <div class="popular-post widget">
                <div class="header">Articles</div>
                <ul class="list-popular-post">
                    {this.state.articulosSuscritos.map(key =>
                        <PopularPost 
                        title= {key.title}/>
                    )}
                    </ul>
            </div>
        </div>
        )
    }

}