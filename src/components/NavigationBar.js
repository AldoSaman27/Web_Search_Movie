import { Container, Nav, Navbar } from 'react-bootstrap';
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const NavigationBar = () => {
    useEffect(() => {
        $(window).scroll(function() {
          if ($(document).scrollTop() > 50) {
            $('nav').addClass('bg-dark');
          } else {
            $('nav').removeClass('bg-dark');
          }
        });
      }, []);

    return (
        <div>
            <Navbar expand="lg" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand href="#home" className="fw-bold">AS Movie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#movie">Movie</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;