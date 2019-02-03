import React, { Component } from 'react';
import {Form, FormGroup,Col,FormControl,Button,ControlLabel,Grid, Row,Glyphicon} from 'react-bootstrap';
import Header from '../Header/header';
import "./updateprofile.css";
import web3 from '../../web';
import {abi2,address2} from '../../user_contarct';

import ipfs from '../../ipfs';
import { Redirect } from 'react-router-dom';

let contract;
class updateprofile extends Component {
  state={
    isMetaMask:'',
    buffer:'' 

  }

  async componentDidMount(){
    console.log(web3.currentProvider.isMetaMask);    
    if(web3.currentProvider.isMetaMask === true){
      contract = new web3.eth.Contract(abi2, address2);
      console.log(contract);
  }


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
    // if(response.status==200){
    //     console.log("done");
    // }else{
    //   console.log(response);
    // }
    // const user=await contract.methods.countUsers().call();
    // console.log(user);

    contract.methods.AddUser(name,ipfsHash).send({
      "from":account
    }).then((receipt)=>{ 
      console.log(receipt);
    });
  }
  retrieveuser=async (event)=>{
    const accounts=await web3.eth.getAccounts();
    const account=accounts[0];
    const response=await fetch(`/api/v1/user/${account}`);
    var data=await (response.json());
    console.log(data.publicKey);

    const user=await contract.methods.countUsers().call();
    console.log(user);


    var count=await contract.methods.Users(0).call();
    console.log(count);
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
            <div style={{minHeight:'100%', width:"103%" }}>
            <div class="headerclass">
            <Header/>
            <Grid style={{width:"100%"}} >
                    <Row style={{ width:"100%"}}>
                        <Col xs={4} xsOffset={6}>
                        <br/>
                        <p className="pagename">Update Profile</p>
                        </Col> 
                    </Row>
                </Grid>
            </div>

            <div className="bodyclass" style={{marginTop:"50px"}}>
            
              <Grid>
                <Row>
                  <Col lg={{span:4, offset:6}}>
                    <button onClick={this.retrieveuser} name="btn">Submit</button>
                    <form onSubmit={this.addUser}>
                    <Form horizontal>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}  xsOffset={1} style={{color:"#e9e9e9",fontFamily:"sans-serif",fontWeight:"0"}}>
                              Name
                        </Col>
                        <Col sm={6}>
                          <FormControl type="text" name="name" placeholder="Name" />
                        </Col>
                      </FormGroup><br/>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}  xsOffset={1} style={{color:"#e9e9e9",fontFamily:"sans-serif",fontWeight:"0"}}>
                          Email
                        </Col>
                        <Col sm={6}>
                          <FormControl type="email" name="email" placeholder="Email" />
                        </Col>
                      </FormGroup><br/>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}  xsOffset={1} style={{color:"#e9e9e9",fontFamily:"sans-serif",fontWeight:"0"}}>
                          Number
                        </Col>
                        <Col sm={6}>
                          <FormControl type="text" name="number" placeholder="Contact Number" />
                        </Col>
                      </FormGroup><br/>

                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}  xsOffset={1} style={{color:"#e9e9e9",fontFamily:"sans-serif",fontWeight:"0"}}>
                          Address
                        </Col>
                        <Col sm={6}>
                          <FormControl type="text" number="address" placeholder="Address" />
                        </Col>
                      </FormGroup><br/>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}  xsOffset={1} style={{color:"#e9e9e9",fontFamily:"sans-serif",fontWeight:"0"}}>
                          Resume
                        </Col>
                        <Col sm={6} style={{color:"#e9e9e9",fontFamily:"sans-serif",fontWeight:"0"}}>
                          <FormControl type="file" name="file" onChange={this.captureFile}  />
                        </Col>
                      </FormGroup><br/>

                      <FormGroup>
                        <Col xs={1} xsOffset={3}>
                          <Button type="submit" name="submit" className="btn btn-warning">Submit</Button>
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
 
export default updateprofile;