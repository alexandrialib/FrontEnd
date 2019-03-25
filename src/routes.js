import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {browserHistory,Redirect } from 'react-router';

import App from './js/App';
import Article from './js/Components/Article';
import Categories from './js/Components/Categories'
import Login from './js/Components/Login';
import Home from './js/Components/Home';
import ArticleList from './js/Components/ArticleList';
import Error404 from './js/404';
import ArticlelList from './js/Components/ArticleList';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home}/>  
      <Route path="/login" component={Login} />
      <Route path="/categories" component={Categories}/>
      <Route path="/Sort/Quick" component={Article}/>
      <Redirect from="/categories" to="/sort" component={ArticlelList}/>
      <Route path="/articles" component={ArticleList}/>
      <Route component={Error404}/>
      
    </Switch>
  </App>;

export default AppRoutes;
