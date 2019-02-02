import React, { Component } from "react";
import { Nav,Navbar, Glyphicon} from "react-bootstrap";

// import {Grid, Row, Col} from 'react-bootstrap';

// import Sidebar from 'react-bootstrap-sidebar';
// import Modal from 'react-bootstrap-modal';
import "./header.css";
class header extends Component {
  render() {
    return (
            <div id="sidebar-menu" className="sideBarMenuContainer">
              <Navbar fluid className="sidebar">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/">User Name</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                  <Navbar.Text className="userMenu">
                    <Navbar.Link href="#">
                      <Glyphicon glyph="home" />
                    </Navbar.Link>
                    <Navbar.Link href="#">
                      <Glyphicon glyph="log-out" />
                    </Navbar.Link>
                  </Navbar.Text>
                  <Nav>
                    
                    <a href={'/'}>Dashboard</a><hr/>
                    <a href={'addproject'}>Add Projects</a><hr/>
                    <a href={'updateprofile'}>Update Details</a><hr/>
                    <a href={'addprojectcompleted'}>My Project</a><hr/>
                    <a href={'addprojectapplication'}>Application</a>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
    );
  }
}

export default header;
