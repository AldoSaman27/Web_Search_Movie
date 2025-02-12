// React
import React, { useEffect } from 'react';

// React Bootstrap
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const navbar = document.getElementsByClassName("navbar")[0];
            if (window.scrollY > 0) navbar.classList.add("bg-dark");
            else navbar.classList.remove("bg-dark");
        })
    }, [])

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