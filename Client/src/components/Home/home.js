import React, { Component } from 'react';
import {Grid, Row, Col, Card, Button } from 'react-bootstrap';
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
            <div style={{minHeight:'100%'}}>
            <div class="headerclass">
            <Header/>
            </div>
            <div className="bodyclass">
              <Grid>
                <Row>
                  <Col lg={{span:4, offset:6}}>
                  <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>                    
                  </Col>
                </Row>
              </Grid>
            </div>
            </div>
         );
    }
}
 
export default home;