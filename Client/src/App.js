import React, { Component } from "react";
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Home from './components/Home/home';
import Login from '././components/Login/login';
import AddProject from '././components/Add Project/addproject';
import MyProApp from '././components/My Project Application/myprojapplication';
import MyProComp from '././components/My Project Completed/myprojcompleted';
import UpdateProfile from '././components/Update Profile/updateprofile';
import NotFound from '././components/Not Found/notfound';
import header from '././components/Header/header';
import web3 from './web';
import {abi,address} from './user_contarct';
import {abi2,address2} from './main';
import ipfs from './ipfs';

class App extends Component {
  state={
    isMetaMask:'' 
  }

  async componentDidMount(){

    if (typeof window.web3 !== 'undefined') {
      console.log('web3 is enabled');
      // const account=await web3.eth.getAccounts();

      if (web3.currentProvider.isMetaMask === true) {
          await this.setState({isMetaMask: true});
          console.log('MetaMask is active');
      } else {
          console.log('MetaMask is not available')
      }
    } 
    else {
      console.log('web3 is not found')
    }
  }

  render() {
    return (
      
      <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/addproject" component={AddProject}/>
          <Route path="/addprojectapplication" component={MyProApp}/>
          <Route path="/addprojectcompleted" component={MyProComp}/>
          <Route path="/updateprofile" component={UpdateProfile}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
    );
  }
}

export default App;