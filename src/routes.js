import React from 'react';
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import About from './js/Components/About'
import Comments from './js/Model/CommentList'
import App from './js/App';
import Article from './js/Components/Article';
import Categories from './js/Components/Categories'
import Login from './js/Components/Login';
import Register from './js/Components/Register';
import Home from './js/Components/Home';
import ArticleList from './js/Components/ArticleList';
import Error404 from './js/404';
import Editor from './js/Components/Editor'
import Blackboard from './js/Components/Blackboard'
import WhiteBoard from './js/Components/WhiteBoard'
import ArticlelList from './js/Components/ArticleList';
import Session from './js/Components/Session';

const AppRoutes = ({match}) =>
  <App>
    <Switch>
      <Route exact path="/About" component={About}/>
      <Route exact path="/" component={Home}/>  
      <Route exact path="/comments" component={Comments} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/categories" component={Categories}/>
      <Route path="/categories/:name/articles/:title" component={Article}/>
      <Route path ="/editor" component={Editor}/>
      <Route path ="/blackboard" component={Blackboard}/>
      <Route path ="/whiteboard" component={WhiteBoard}/>
      <Route path ="/session" component={Session}/>
      <Route path="/categories/:title" component={ArticleList}/>
      <Route component={Error404}/>
    
    </Switch>
  </App>;

export default AppRoutes;
