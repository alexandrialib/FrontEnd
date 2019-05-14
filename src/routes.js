import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './js/Components/About';
import Comments from './js/Model/CommentList';
import App from './js/App';
import Article from './js/Components/Article';
import Categories from './js/Components/Categories';
import Home from './js/Components/Home';
import ArticleList from './js/Components/ArticleList';
import Error404 from './js/404';
import Editor from './js/Components/Editor';
import Blackboard from './js/Components/Blackboard';
import WhiteBoard from './js/Components/WhiteBoard';
import Session from './js/Components/Session';
import profile from './js/Components/UserPage/profile';
import SingIn from './js/Components/RegisterForm/SingIn';
import reactMArk from './js/Components/UserPage/MarkDown/markdonw-editor';
import SingUp from './js/Components/RegisterForm/SingUp';
import FormArt from './js/Components/UserPage/MarkDown/postArticle/newArticleBox';
import VideoChat from './js/VideoCall/public/js/VideoChat';

const AppRoutes = ({match}) =>
  <App>
    <Switch>
    <Route exact path="/VideoChat" component={VideoChat}/>
      <Route exact path="/newArtF" component={FormArt}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/" component={Home}/>  
      <Route exact path="/comments" component={Comments} />
      <Route exact path="/newArticle" component={reactMArk} />
      <Route exact path="/categories" component={Categories}/>
      <Route path="/categories/:name/articles/:title" component={Article}/>
      <Route path ="/editor" component={Editor}/>
      <Route path ="/blackboard" component={Blackboard}/>
      <Route path ="/whiteboard" component={WhiteBoard}/>
      <Route path ="/session" component={Session}/>
      <Route path="/categories/:title" component={ArticleList}/>
      <Route path="/profile" component={profile}/>
      <Route exact path="/singin" component={SingIn}/>
      <Route exact path="/singup" component={SingUp}/>
      <Route component={Error404}/>
    
    </Switch>
  </App>;

export default AppRoutes;
