import React, { Component } from "react";
import { Grid, Row, Col,Button, Glyphicon,FormGroup ,FormControl,ControlLabel,Form} from "react-bootstrap";
import Header from "../Header/header";
import {abi,address} from "../../project_contract";
import {abi2,address2} from "../../user_contarct";
import { Redirect } from "react-router-dom";
//import { Card, CardTitle, CardActions, CardText } from "react-mdl";
import "./myprojapplication.css";
import web3 from "../../web";
let contract;
let userContract;
class myprojapplication extends Component {
  state={
    projects:[],
    
  }

  async componentDidMount(){
    if(web3.currentProvider.isMetaMask===true){
      contract=new web3.eth.Contract(abi,address);
      userContract=new web3.eth.Contract(abi2,address2);
      const accounts=await web3.eth.getAccounts();
      const account=accounts[0];
      const userNum=await userContract.methods.countUsers().call();
  
      console.log(userNum)
      var projects=[]
      for(var j=0;j<userNum;j++){
        const useraddr=await userContract.methods.Users(j).call();
        console.log(useraddr);

        const numberProjects=await contract.methods.lenC().call({
          "from":useraddr
        });
        console.log(numberProjects);
        if(numberProjects!=0){
          for(var i =0;i<numberProjects;i++){

            
            const projectres=await(contract.methods.ProjectMap(useraddr,i)).call();
            var response =await fetch(`/api/v1/auction/${projectres.pname}`);
            // console.log(response.auction.user_bid);
            var data=await response.json();
            // var t = data.auction[0]['finalbid'];
            console.log(data.auction[0],"usr");
              if( data['finaladdr'] == account){
                  var fbid = data['finalbid'];
                  projectres['fbid'] = fbid;
                  var dic={};
                  dic[useraddr]=projectres;
                  projects.push(dic);
              }
          }
        }

        
        
      }
      this.setState({projects:projects});
      // console.log(this.state.projects);
      // for(var i=0;i<numberProjects)


    }
  }
  Submit=async(event)=>{
    event.preventDefault();
    const data= new FormData(event.target);
    const link=data.get("link");
    const accounts=await web3.eth.getAccounts();
    const account=accounts[0];
    console.log("bid:",link);
    return < Redirect to="/" />;
    
  }

  render() {

    const val=this.state.projects;
    // console.log(val);
    var projects=[]
    val.forEach(element => {
      console.log(element);
      for(var key in element){
        // console.log();
        var projectname=element[key].pname;
        var fb = element[key].fbid;
                    projects.push(
                      <Grid>
                      <Row style={{left:"-10px"}}> 
                        <Col xs={12}>
                          <div className="cards">
                            <div className="card">
                            <Grid>
                            <Row className="cardHeader">
                              <Col class="Headershift" xs={10}>
                                <h5>&nbsp;&nbsp; {projectname} &nbsp; {fb}</h5>
                              </Col>
                            < Col xs={2} >

                              <Form onSubmit={this.SubLink}>
                                <FormGroup controlId="formHorizontalText">
                                    <Col sm={10}>
                                    <FormControl type="text" id="link" name="link" placeholder="Github Link" />
                                    
                                  </Col>
                              </FormGroup>
                              <Col xs={6}>
                              <Button type="submit" className="btn btn-success"><span class="glyphicon glyphicon-ok">&nbsp;</span>Submit</Button>{" "}
                              </Col>
                              </Form>   
                              </Col>
                            </Row>
                            <Row className="cardDesc">
                                <Col xs={10}>
                                  <p>Cost 
                                  </p>
                                </Col>
                              
                            </Row>
                            </Grid>
                              <div className="front">
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
          
  
                    )
        }

        });
      
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
      <div style={{ minHeight: "100%", width:"120%" }}>
        <div class="headerclass">
          <Header />
          <Grid style={{width:"100%"}} >
                    <Row style={{background:"rgb(47, 53, 58)", width:"100%"}}>
                        <Col xs={4} xsOffset={4}>
                        <br/>
                        <p className="username">Dashboard</p>
                        </Col>
                        <Col xs={2} xsOffset={1} style={{background:"rgb(47, 53, 58)", height:"50px", left:"0"}}>
                        <br/>  <p className="username"><Glyphicon glyph="user" />&nbsp;&nbsp;Hello User</p>
                        </Col>
                    </Row>
                </Grid>
        </div>
        <div className="bodyclass">
        
          {projects}

        </div>
      </div>
    );
  }
}
 
export default myprojapplication;