import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
    const CustomNavbar = () => {
      return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            {/* Brand Logo */}
            <Navbar.Brand href="#">MyShop</Navbar.Brand>
    
            {/* Toggle Button for Mobile */}
            <Navbar.Toggle aria-controls="navbar-nav" />
    
            {/* Collapsible Navbar */}
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Products</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
    
              {/* Search Bar */}
              <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
    
              {/* User Icon */}
              <Nav className="ms-3">
                <Nav.Link href="#">
                  <FaUser size={20} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };
    
    export default CustomNavbar;

