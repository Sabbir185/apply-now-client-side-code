import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './MainNavbar.css'


const MainNavbar = () => {


    return (
        <section className="container-fluid mt-2 sticky-top">

            <Navbar bg="light" expand="lg">
                <Navbar.Brand> <Link className="text-decoration-none" to="/">
                    <span className="logo"><img src={logo} alt="" className="img-fluid"/> Apply-Now</span> </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to='/'>Home</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to='/employer'>Employer</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to='/job-seeker'>Job Seeker</Link> </Nav.Link>
                        <Nav.Link> <Link className="mr-2 text-decoration-none color" to='/admin'>Admin</Link> </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </section >
    );
};

export default MainNavbar;