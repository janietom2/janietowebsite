// import * as React from "react"
import React, { useState } from 'react';
import PropTypes from "prop-types"
import {Row, Container, Nav, Navbar} from "react-bootstrap" 
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLocation } from '@reach/router';

const MenuNav = ({ menuLinks, activeLink }) => {

    const userLocation = useLocation()

    function isLinkActive(link) {
        return link === userLocation.pathname
    }

    return (
    <div>
    <Container>
        <Row
        style={{ marginBottom: `40px` }}
        >
    
            <div className="col align-self-center">
                <Navbar collapseOnSelect expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                    {menuLinks.map(link => {
                       return isLinkActive(link.link) 
                       ? <Nav.Link href={link.link} className="nav-link active">{link.name}</Nav.Link>
                       : <Nav.Link href={link.link} className="nav-link">{link.name}</Nav.Link>
                    })}     
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </div> 

        </Row>
    </Container>
    </div>
    )

}

export default MenuNav