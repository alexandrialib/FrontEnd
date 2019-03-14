import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './js/App';
import Articule from './js/Components/Articule';
import Login from './js/Components/Login';
import Home from './js/Components/Home';
import Error404 from './js/404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home}/>  
      <Route path="/login" component={Login} />
      <Route path="/articule" component={Articule}/>
      <Route component={Error404}/>
      
    </Switch>
  </App>;

export default AppRoutes;
