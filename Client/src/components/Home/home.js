import React, { Component } from "react";
import { Grid, Row, Col,Button, Glyphicon,FormGroup,FormControl,ControlLabel,Form } from "react-bootstrap";
import Header from "../Header/header";
import {abi,address} from "../../project_contract";
import {abi2,address2} from "../../user_contarct";

//import { Card, CardTitle, CardActions, CardText } from "react-mdl";
import "./home.css";
import web3 from "../../web";
let contract;
let userContract;
class home extends Component {
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
            
            var dic={};
            dic[useraddr]=projectres;
            projects.push(dic);

            
          }
        }

        
        
      }
      this.setState({projects:projects});
      console.log(this.state.projects);
      // for(var i=0;i<numberProjects)


    }
  }

  Bid=async(event)=>{
    event.preventDefault();
    const data= new FormData(event.target);
    const bid=data.get("bid");
    const pname=data.get("pname");
    const accounts=await web3.eth.getAccounts();
    const account=accounts[0];
    console.log("bid:",bid,"pname",pname);
    const response= await fetch("/api/v1/auction",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        pname:pname,
        useraddr:account,
        bid:bid
       }),
    });
    

    console.log(response);
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
        
        projects.push(
                    <Grid>
                    <Row style={{left:"-10px"}}> 
                      <Col xs={12}>
                        <div className="cards">
                          <div className="card">
                          <Grid>
                          <Row className="cardHeader">
                            <Col class="Headershift" xs={10}>
                              <h5>&nbsp;&nbsp; {projectname}</h5>
                            </Col>
                           < Col xs={2} >
                             <Form onSubmit={this.Bid}>
                              <FormGroup controlId="formHorizontalText">
                                  <Col sm={10}>
                                  <FormControl type="hidden" name="pname" id="pname" value={projectname}/>
                                  <FormControl type="text" id="bid" name="bid" placeholder="Bid" />
                                  <hr/>
                                </Col>
                            </FormGroup>
                            <Col xs={6}>
                            <Button type="submit" className="btn btn-success"><span class="glyphicon glyphicon-ok">&nbsp;</span>Apply</Button>{" "}
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
      <div style={{ minHeight: "100%", width:"103%"}}>
        <div class="headerclass" >
          <Header />
          <Grid style={{width:"100%"}} >
                    <Row style={{background:"rgb(47, 53, 58)", width:"100%"}}>
                        <Col xs={4} xsOffset={6}>
                        <br/>
                        <p className="pagename">Dashboard</p>
                        </Col> 
                        <Col xs={2} style={{background:"#e9e9e9", height:"60px", left:"0"}}>
                         <br/><p className="username" style={{color:"rgba(0, 0, 0)",fontWeight:"600"}}><Glyphicon glyph="user" />&nbsp;&nbsp;&nbsp;&nbsp;Hello User</p>
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
 
export default home;