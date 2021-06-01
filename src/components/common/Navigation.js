import React, {useState} from 'react';
import {Col, Container, Nav, Row, Button} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    const [item, setItem] = useState()
    const history = useHistory()

    function searchCheck(e){
        console.log(e.target.value)
        if (e.key === 'Enter') {
            history.push({
                pathname: "/items",
                search: `q=${e.target.value}`
            })
            e.target.value = "";
        }
    }

    return (
        <Container>
            <Row className={"py-3 border-bottom align-items-center"}>
                <Col className={"col-5 navBrand"}>
                    <NavLink to={"/"} exact>Neopets <span className="colorChange">Un-dyed</span></NavLink>
                </Col>
                <Nav className={"col-7 justify-content-end align-items-center"}>
                    <input type="text" onKeyPress={(e) => searchCheck(e)} onChange={(e)=> setItem(e.target.value)} className="searchbar rounded mr-2"  placeholder="Search"/>
                    <NavLink to={"/submit"}><Button className={"mr-2"}>Submit <FontAwesomeIcon icon={faPlus} /></Button></NavLink>
                    <NavLink to={"/portal"}>Register/Login</NavLink>
                </Nav>
            </Row>
        </Container>
    );
}

export default Navigation;