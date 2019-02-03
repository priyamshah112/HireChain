import React, { Component } from "react";
import {Grid,Row,Col, Nav,Navbar, Glyphicon} from "react-bootstrap";

// import {Grid, Row, Col} from 'react-bootstrap';

// import Sidebar from 'react-bootstrap-sidebar';
// import Modal from 'react-bootstrap-modal';
import "./header.css";
class header extends Component {
  render() {
    return (
        <body>
            <div id="sidebar-menu" className="sideBarMenuContainer" style={{borderRight:"none"}}>
              <Navbar fluid className="sidebar">
                <Navbar.Header>
                  <Navbar.Brand><br/>
                    <a href="/"style={{color:"#e9e9e9", fontFamily:"sans-serif",fontSize:"24px"}}><Glyphicon glyph="link" />&nbsp;&nbsp;&nbsp;HireChain</a>
                  </Navbar.Brand> <br/> <br/><br/><br/>
                  <Navbar.Toggle />
                </Navbar.Header>
               
                <Navbar.Collapse>
                  <Navbar.Text className="userMenu">
                  <Navbar.Link href="#"><hr/> 
                    <a style={{color:"#e9e9e9"}}>&nbsp;<Glyphicon glyph="user" />&nbsp;&nbsp;&nbsp;<span>Username</span></a>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                    <a style={{color:"#e9e9e9"}}><Glyphicon glyph="log-out" />&nbsp;&nbsp;&nbsp;Logout</a>
                    </Navbar.Link><hr/> 
                  </Navbar.Text>
                  <Nav>
                    <div style={{marginLeft:"20px", width:"100%"}}>
                    <a href={'/'} ><span className="navitems" style={{textDecoration:"none !important", color:"#e9e9e9"}}><Glyphicon glyph="dashboard" />&nbsp;&nbsp;&nbsp;Dashboard</span></a><br/><br/>
                    <a href={'addproject'}><span className="navitems" style={{textDecoration:"none !important", color:"#e9e9e9"}}><Glyphicon glyph="plus-sign" />&nbsp;&nbsp;&nbsp;Add Projects</span></a><br/><br/>
                    <a href={'updateprofile'}><span className="navitems" style={{textDecoration:"none !important", color:"#e9e9e9"}}><Glyphicon glyph="pencil" />&nbsp;&nbsp;&nbsp;Update Profile</span></a><br/><br/>
                    <a href={'addprojectcompleted'}><span className="navitems" style={{textDecoration:"none !important", color:"#e9e9e9"}}><Glyphicon glyph="briefcase" />&nbsp;&nbsp;&nbsp;My Project</span></a><br/><br/>
                    <a href={'addprojectapplication'}><span className="navitems" style={{textDecoration:"none !important", color:"#e9e9e9"}}><Glyphicon glyph="list-alt" />&nbsp;&nbsp;&nbsp;Application</span></a>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
                
            </body>
    );
  }
}

export default header;
