import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Home from './components/Home/home';
import Login from '././components/Login/login';
import Carousel from '././components/Carousel/carousel';
import NotFound from '././components/Not Found/notfound';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/carousel" component={Carousel}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;