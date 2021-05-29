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
                <Nav className={"col-7 justify-content-end"}>
                    <input type="text" className="searchbar rounded" placeholder="Search"/> <Button className={"ml-2"}>Submit <FontAwesomeIcon icon={faPlus} /></Button>
                </Nav>
            </Row>
        </Container>
    );
}

export default Navigation;