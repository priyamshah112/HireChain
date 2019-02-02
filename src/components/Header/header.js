import React, { Component } from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

// import Sidebar from 'react-bootstrap-sidebar';
// import Modal from 'react-bootstrap-modal';
import './header.css';
class header extends Component {
  render() { 
    return ( 
  <div id="sidebar-menu" className="sideBarMenuContainer">
            <Navbar fluid className="sidebar"  >

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">User Name</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Navbar.Text className="userMenu">
                        <Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>
                        <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
                    </Navbar.Text>
                    <Nav>
                        <NavDropdown eventKey={1} title="Item 1">
                            <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2}>Item 2</NavItem>
                        <NavItem eventKey={3}>Item 3</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
    }
}
 
export default header;