import React, { Component } from 'react';
import {Grid, Row, Col,Form, Button } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card'
import Header from '../Header/header';
import "./home.css";

class home extends Component {

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
            <div>
              
               <Header/>
               <Grid>
                 <Row>
                   <Col md={{offset:10}}>
                                     
                   </Col>
                 </Row>
               </Grid>
            </div>
            
         );
    }
}
 
export default home;