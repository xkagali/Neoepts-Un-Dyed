import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom"

function Navigation() {
    return (
        <Container>
            <Row className={"py-3 border-bottom align-items-center"}>
                <Col className={"col-5 navBrand"}>
                    Neopets <span className="colorChange">Un-dyed</span>
                </Col>
                <Nav className={"col-7 justify-content-end"}>
                    <input type="text" className="searchbar rounded" placeholder="Search"/>
                </Nav>
            </Row>
        </Container>
    );
}

export default Navigation;