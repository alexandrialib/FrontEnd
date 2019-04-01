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

const AppRoutes = ({match}) =>
  <App>
    <Switch>
      <Route exact path="/" component={Home}/>  
      <Route path="/login" component={Login} />
      <Route exact path="/categories" component={Categories}/>
      <Route path="/Sort/Quick" component={Article}/>

      <Route path="/categories/:name" component={ArticleList}/>
      <Route component={Error404}/>
      
    </Switch>
  </App>;

export default AppRoutes;
