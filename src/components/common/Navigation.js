import React from 'react';
import {Col, Container, Nav, Row, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    return (
        <Container>
            <Row className={"py-3 border-bottom align-items-center"}>
                <Col className={"col-5 navBrand"}>
                    <NavLink to={"/"} exact>Neopets <span className="colorChange">Un-dyed</span></NavLink>
                </Col>
                <Nav className={"col-7 justify-content-end align-items-center"}>
                    <input type="text" className="searchbar rounded mr-2" placeholder="Search"/>
                    <Button className={"mr-2"}>Submit <FontAwesomeIcon icon={faPlus} /></Button>
                    <NavLink to={"/portal"}>Register/Login</NavLink>
                </Nav>
            </Row>
        </Container>
    );
}

export default Navigation;