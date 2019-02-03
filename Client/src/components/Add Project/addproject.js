import React, { Component } from "react";
import Header from "../Header/header";
import "./addproject.css";
import {Form, FormGroup,Col,FormControl,Button,Checkbox,ControlLabel,Grid, Row,} from 'react-bootstrap';
import web3 from '../../web';
import {abi,address} from '../../project_contract';
import { Redirect } from 'react-router-dom';
let contract;

class addproject extends Component {

  state={
    isMetaMask:'',

    }
    
    async componentDidMount(){
    
    if (typeof window.web3 !== 'undefined') {
    console.log('web3 is enabled');
    if (web3.currentProvider.isMetaMask === true) {
      contract = new web3.eth.Contract(abi, address);
    await this.setState({isMetaMask: true});
    console.log('MetaMask is active');
    } else {
    console.log('MetaMask is not available')
    }
    } else {
    console.log('web3 is not found')
    }
    if(this.state.isMetaMask){
    console.log("metamask done");
    }
    
    }
    addProject= async(event)=>{
     
      console.log(contract);
      event.preventDefault();
      const data= new FormData(event.target);
      const pname=data.get("pname");
      const pdescription=data.get("pdescription");
      const pcost=data.get("pcost");

      const accounts = await web3.eth.getAccounts();
    
      console.log(web3.utils.toWei(pcost));
      var receipt=await(contract.methods.AddProject(pname,pdescription).send({
          "from":accounts[0],
          "value":web3.utils.toWei(pcost)

      })
      );
     var response =await fetch("/api/v1/project",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          own:accounts[0],
          pname:pname
       }),
      });
      console.log(response);
      


      // console.log(receipt);
      
      console.log(pname + pdescription + pcost);
    }

    projecttest=async(event)=>{

      const accounts = await web3.eth.getAccounts();
      const response=await contract.methods.lenP().call();
      console.log(response);
    }
    
      render() { 
          return ( 
              <div style={{minHeight:'100%'}}>
              <div class="headerclass">
              <Header/>
              </div>
  
              <div className="bodyclass">
  
                <Grid>
                  <Row>
                    <Col lg={{span:4, offset:6}}>
                      <a href={'carousel'}><h1>Hii</h1></a>
                      <button onClick={this.projecttest} name="btn">Submit</button>
                      <form onSubmit={this.addProject}>
                      <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                          <Col componentClass={ControlLabel} sm={2}>
                                Project Name
                          </Col>
                          <Col sm={10}>
                            <FormControl type="text" name="pname" placeholder="Project Name" />
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                          <Col componentClass={ControlLabel} sm={2}>
                            Project Description
                          </Col>
                          <Col sm={10}>
                            <FormControl type="text" name="pdescription" placeholder="Project Description" />
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                          <Col componentClass={ControlLabel} sm={2}>
                            Project Cost
                          </Col>
                          <Col sm={10}>
                            <FormControl type="text" name="pcost" placeholder="1.0 Ether" />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col smOffset={2} sm={10}>
                            <Button type="submit" name="submit" >Add Project</Button>
                          </Col>
                        </FormGroup>
                      </Form>
                      </form>
                    </Col>
                  </Row>
                </Grid>
              </div>
              </div>
           );
      }



  }
   
  export default addproject;