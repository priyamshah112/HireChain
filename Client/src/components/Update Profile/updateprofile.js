import React, { Component } from 'react';
// import {Grid, Row, Col, } from 'react-bootstrap';
import Header from '../Header/header';
import "./updateprofile.css";
import {Form, FormGroup,Col,FormControl,Button,Checkbox,ControlLabel,Grid, Row,} from 'react-bootstrap';
import web3 from '../../web';
import {abi,address} from '../../user_contarct';
import {abi2,address2} from '../../main';
import ipfs from '../../ipfs';
import { Redirect } from 'react-router-dom';

let contract;
class home extends Component {
  state={
    isMetaMask:'',
    buffer:'' 

  }

  async componentDidMount(){
  if(web3.currentProvider.host==='metamask'){
    contract = new web3.eth.Contract(abi, address);
    console.log(contract);
  }
  // const account=await web3.eth.getAccounts();
  // console.log(account[0]);


  }
  captureFile=(event)=>{
    console.log("event");
    event.stopPropagation();
    event.preventDefault();
    const file=event.target.files[0];
    let reader=new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
        this.setState({ buffer: Buffer(reader.result) })
        console.log('buffer', this.state.buffer)
    }
    
  }


  addUser= async(event)=>{
    event.preventDefault();
    const data= new FormData(event.target);
    const name=data.get("name");
    const email=data.get("email");
    const number=data.get("number");
    const address=data.get("address");
    const accconts=await web3.eth.getAccounts();
    const account=accconts[0];
    // console.log(account);
    const ipfsresponse=await ipfs.add(this.state.buffer);
    console.log(ipfsresponse[0].hash);
    const ipfsHash=ipfsresponse[0].hash;


    const response= await fetch("/api/v1/add",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name:name,
        email:email,
        number:number,
        address:address,
        publicKey:account,
        link:'https://ipfs.io/ipfs/'+ipfsHash
        
       }),
    });
    console.log(response);
    if(response.status==200){
      return <Redirect to="/"/> 
    }else{
      console.log(response);
    }
    
  
    


    // const accounts=await web3.eth.getAccounts();
    

  }

  
    render() { 
        return ( 
            
            // <div><Header/><ProgressBar active now={45} /><ProgressBar>
            // <ProgressBar striped bsStyle="success" now={35} key={1} />
            // <ProgressBar bsStyle="warning" now={20} key={2} />
            // <ProgressBar active bsStyle="danger" now={10} key={3} />
            // </ProgressBar>;
            // <div style={{ minheight: "100%"}}>
            //   <Grid className="container-fluid" style={{ width: "100%" }}>
            //     <Row>
            //       <Col xs={4} className="button">
            //         <Button className="btn btn-success">Primary</Button>{" "}
            //       </Col>
            //       <Col xs={4} className="button">
            //         <Button className="btn btn-warning-outline">Primary</Button>{" "}
            //       </Col>
            //       <Col xs={4} className="button">
            //       <Button className="btn btn-danger" outline={true}>
            //         Primary
            //       </Button>{" "}
            //       </Col>
            //     </Row>
            //   </Grid>
            // </div>
            // </div>
            <div style={{minHeight:'100%'}}>
            <div class="headerclass">
            <Header/>
            </div>

            <div className="bodyclass">

              <Grid>
                <Row>
                  <Col lg={{span:4, offset:6}}>
                    <a href={'carousel'}><h1>Hii</h1></a>
                    <form onSubmit={this.addUser}>
                    <Form horizontal>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                              Name
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" name="name" placeholder="Email" />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Email
                        </Col>
                        <Col sm={10}>
                          <FormControl type="email" name="email" placeholder="Email" />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Number
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" name="number" placeholder="Email" />
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Address
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" number="address" placeholder="Email" />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Resume
                        </Col>
                        <Col sm={10}>
                          <FormControl type="file" name="file" onChange={this.captureFile} placeholder="Email" />
                        </Col>
                      </FormGroup>

                      


                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                          <Checkbox>Remember me</Checkbox>
                        </Col>
                      </FormGroup>

                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                          <Button type="submit" name="submit" >Sign in</Button>
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
 
export default home;