import React, { Component } from "react";
import Header from "../Header/header";
import "./addproject.css";
import {Glyphicon,Form, FormGroup,Col,FormControl,Button,Checkbox,ControlLabel,Grid, Row,} from 'react-bootstrap';
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
      contract = new web3.eth.Contract(abi, address);
      console.log(contract);
      event.preventDefault();
      const data= new FormData(event.target);
      const pname=data.get("pname");
      const pdescription=data.get("pdescription");
      const pcost=data.get("pcost");
      const accounts = await web3.eth.getAccounts();
      await(contract.methods.AddProject(pcost,pname,pdescription).send({
          "from":accounts[0],
      })
      );
      
      console.log(pname + pdescription + pcost);
    }


    
      render() { 
          return ( 
            <div style={{ minHeight: "100%", width:"103%" }}>
            <div class="headerclass">
              <Header />
              <Grid style={{width:"100%"}} >
                        <Row style={{background:"rgb(47, 53, 58)", width:"100%"}}>
                            <Col xs={4} xsOffset={6}>
                            <br/>
                            <p className="pagename">Add Project</p>
                            </Col> 
                            <Col xs={2} style={{background:"#e9e9e9", height:"60px", left:"0"}}>
                             <br/><p className="username" style={{color:"rgba(0, 0, 0)",fontWeight:"600"}}><Glyphicon glyph="user" />&nbsp;&nbsp;&nbsp;&nbsp;Hello User</p>
                            </Col>
                        </Row>
                    </Grid>
            </div>
  
              <div className="bodyclass">
  
                <Grid>
                  <Row>
                    <Col lg={{span:4, offset:6}}>
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
                          <Col sm={2}>
                            <FormControl type="text" name="pcost" placeholder="1.0 Ether" />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col xs={1} xsOffset={2}>
                          <Button type="submit" name="submit" className="btn btn-info">Sign In</Button>
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
