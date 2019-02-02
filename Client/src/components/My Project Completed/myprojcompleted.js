import React, { Component } from "react";
import { Grid, Row, Col,Button } from "react-bootstrap";
import Header from "../Header/header";
import "./myprojcompleted.css";
class myprojcompleted extends Component {
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
      <div style={{ minHeight: "100%" }}>
        <div class="headerclass">
          <Header />
        </div>
        <div className="bodyclass">
          <Grid>
            <Row>
              <Col lg={{ span: 4, offset: 6 }}>
              <div className="cards">
                  <div className="card">
                  <Grid>
                  <Row className="cardHeader">
                    <Col class="Headershift">
                      <h5>&nbsp;&nbsp; Project Name</h5>
                    </Col>
                  </Row>
                  <Row className="cardDesc">
                      <Col xs={10}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
ipsum dolor sit amet...'
</p>
                      </Col>
                      <Col xs={1}>
                      <Button className="btn btn-success"><span class="glyphicon glyphicon-ok">&nbsp;</span>Apply</Button>{" "}
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
        </div>
      </div>
    );
  }
}

export default myprojcompleted;
