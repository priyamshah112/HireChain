import React, { Component } from "react";
import Header from "../Header/header";
import "./addproject.css";
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  ControlLabel,
} from "react-bootstrap";

class addproject extends Component {
  render() {
    return (
      <div style={{ minHeight: "100%" }}>
        <div class="headerclass">
          <Header />
        </div>
        <div className="bodyclass">
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Project Name
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder="" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Cost
              </Col>
              <Col sm={1}>
                <FormControl type="text" placeholder="" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Description
              </Col>
              <Col sm={8}>
              <FormControl as="textarea" aria-label="With textarea" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Add Project</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default addproject;