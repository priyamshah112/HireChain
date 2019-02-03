import React, { Component } from "react";
import { Grid, Row, Col,Button, Glyphicon,FormGroup ,FormControl,ControlLabel,Form} from "react-bootstrap";
import Header from "../Header/header";
import {abi,address} from "../../project_contract";
import {abi2,address2} from "../../user_contarct";

//import { Card, CardTitle, CardActions, CardText } from "react-mdl";
import "./myprojcompleted.css";
import web3 from "../../web";
let contract;
let userContract;
class myprojcompleted extends Component {
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
        
        if(numberProjects!=0 && useraddr === account){
          console.log(useraddr);
          for(var i =0;i<numberProjects;i++){

            
            const projectres=await(contract.methods.ProjectMap(useraddr,i)).call();
            var response =await fetch(`/api/v1/auction/${projectres.pname}`);

            // console.log(response.auction.user_bid);
            var data=await response.json();
            // console.log(data);
            var bid=0;
          
            if(typeof data.auction[0]!== 'undefined'){
              // console.log(data.auction[0]['user_bid']);
              const employee=await userContract.methods.Username(data.auction[0]['user_address']).call();
              const response2=await fetch(`/api/v1/user/${data.auction[0]['user_address']}`);
              const data2=await response2.json();
              console.log(data2);
              // console.log(employee);
              // projectres['ipfs']=employee['ipfshash'];
              
              bid=data.auction[0];
              data.auction[0]['email']=data2.email;
              data.auction[0]['ipfshash']=employee['ipfshash'];
              data.auction[0]['name']=employee['name'];
            }else{
              // data.auction[0]['ipfshash']='';
              // data.auction[0]['name']='';
              
            }
            // console.log(data.auction[0]);
            // console.log(projectres.pname);
            projectres['bids']=data.auction[0];
            
            var dic={};
            dic[useraddr]=projectres;
            projects.push(dic);

            
          }
        }

        
        
      }
      this.setState({projects:projects});
      // console.log(this.state.projects);
      // for(var i=0;i<numberProjects)


    }
  }

  Accept=async(event)=>{
    event.preventDefault();
    const data= new FormData(event.target);
    const bid=parseFloat(data.get("bid"));
    const pname=data.get("pname");
    const publicKey=data.get("publicKey");
    console.log(bid);
    const accounts=await web3.eth.getAccounts();
    const account=accounts[0];
    var receipt=await(contract.methods.acceptMap(publicKey,bid).send({
      "from":account,
    }));
    console.log(receipt);
    var response=await fetch("/api/v1/accept",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        publickey:publicKey,
        bid:bid,
        name:pname        
       }),
    });
    var status=response.status;
    if(status===200){

    }
    console.log(status);
    // const accounts=await web3.eth.getAccounts();
    // const account=accounts[0];
    // console.log("bid:",bid,"pname",pname);
    // const response= await fetch("/api/v1/auction",{
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ 
    //     pname:pname,
    //     useraddr:account,
    //     bid:bid
    //    }),
    // });
    

    // console.log(response);
  }

  render() {

    const val=this.state.projects;
    // console.log(val);
    var projects=[]
    val.forEach(element => {
      // console.log(element);
      for(var key in element){
        // console.log();
        var projectname=element[key].pname;
        var bids =element[key].bids;
        var flag=0;
        var bid;
        var hash;
        var name;
        var publicKey;
        var email;
        
        if(typeof bids!=='undefined'){
          bid=bids['user_bid'];
          publicKey=bids['user_address'];
          name=bids['name'];
          hash=bids['ipfshash'];
          email=bids['email'];
          console.log("bid",bid);
          console.log("hash",hash);
        }else{
          flag=1;
          bid=0;
          hash='';
          name='not applied';
          publicKey='';
          email='not applied';
          // bid.user_bid="0";
        }
        
        
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
                            <Col class="Headershift" xs={10}>
                              <h5>&nbsp;&nbsp; Bid:{bid}</h5>
                            </Col>
                            <Col class="Headershift" xs={10}>
                              <h5>&nbsp;&nbsp; name:{name}</h5>
                            </Col>
                            <Col class="Headershift" xs={10}>
                              <h5>&nbsp;&nbsp; email:{email}</h5>
                            </Col>
                            <Col class="Headershift" xs={10}>

                              <a href={`https://ipfs.io/ipfs/${hash}`}>&nbsp;&nbsp; link</a>
                            </Col>                      
                            <Col xs={2} >
                             <Form onSubmit={this.Accept}>
                              <FormGroup controlId="formHorizontalText">
                                  <Col sm={10}>
                                  <FormControl type="hidden" name="publicKey" id="pname" value={publicKey}/>
                                  <FormControl type="hidden" name="bid" id="pname" value={bid}/>
                                  <FormControl type="hidden" name="pname" id="pname" value={projectname}/>
                                  
                                 
                                  
                                </Col>
                            </FormGroup>
                            <Col xs={6}>
                            <Button type="submit" className="btn btn-success"><span class="glyphicon glyphicon-ok">&nbsp;</span>Accept</Button>{" "}
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
 
export default myprojcompleted;