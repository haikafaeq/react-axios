import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'; 
import {Form, FormControl} from 'react-bootstrap'; 
import {MdNotifications} from 'react-icons/md';
import {GoPerson} from 'react-icons/go'
import {Badge} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'

function NavBar() {
    return (
        <Container>

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
            </Nav>
           
            <Nav>
             
             
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                <Button variant="outline-success"> <FaSearch /> </Button>
                </Form>
                
                <NavDropdown title={<MdNotifications />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">You have 5 new tasks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">You're now friend with Mee</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Another Notification</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<GoPerson />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Inbox<Badge variant="light">9</Badge></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                </NavDropdown>
                
                
              </Nav>
        </Navbar.Collapse>
        </Navbar>

        </Container>
    )
}

export default NavBar
