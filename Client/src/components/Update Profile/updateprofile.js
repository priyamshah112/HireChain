import React, { Component } from 'react';
import {Form, FormGroup,Col,FormControl,Button,ControlLabel,Grid, Row,Glyphicon} from 'react-bootstrap';
import Header from '../Header/header';
import "./updateprofile.css";
class updateprofile extends Component {
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
                    <Row style={{background:"rgb(47, 53, 58)", width:"100%"}}>
                        <Col xs={4} xsOffset={6}>
                        <br/>
                        <p className="username">Update Profile</p>
                        </Col>
                        <Col xs={2} style={{background:"rgb(47, 53, 58)", height:"50px", left:"0"}}>
                        <br/>  <p className="username"><Glyphicon glyph="user" />&nbsp;&nbsp;&nbsp;&nbsp;Hello User</p>
                        </Col>
                    </Row>
                </Grid>
            </div>

            <div className="bodyclass">

              <Grid>
                <Row>
                  <Col lg={{span:4, offset:6}}>
                    <h1></h1>
                    <form onSubmit={this.addUser}>
                    <Form horizontal>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                              Name
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" name="name" placeholder="Full Name" />
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
                          <FormControl type="tel" name="number" placeholder="Contact Number" />
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Address
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" number="address" placeholder="Address" />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Resume
                        </Col>
                        <Col sm={10}>
                          <FormControl type="file" name="file" onChange={this.captureFile}  />
                        </Col>
                      </FormGroup>

                      <FormGroup>
                        <Col xs={1} xsOffset={2}>
                          <Button type="submit" name="submit" className="btn btn-info">Submit</Button>
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