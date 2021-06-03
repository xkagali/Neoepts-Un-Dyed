import React from 'react';
import {Col, Container, Nav, Row, Button} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import "firebase/auth";

function Navigation({logIn, resetLogIn, user, resetUser}) {
    const history = useHistory()

    function logout(e){
        firebase.auth().signOut().then(() => {
            let temp = {}
            resetUser(temp)
            resetLogIn(false)
            history.push('/portal')
        }).catch((error) => {
            // An error happened.
        });
        e.preventDefault()
    }

    function searchCheck(e){
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
                    <input type="text" onKeyPress={(e) => searchCheck(e)} className="searchbar rounded mr-2"  placeholder="Search"/>
                    {(logIn === true) &&
                        <>
                            <NavLink to={`/user/${user.uid}`}><span className={"mx-2"}>{user.displayName}</span></NavLink> |
                            <NavLink to="/submit"><Button className={"mx-2"}>Submit <FontAwesomeIcon icon={faPlus}/></Button></NavLink> |
                            <Button onClick={logout} className={"btnLink ml-2"}>Logout</Button>
                        </>
                    }
                    {(logIn === false) && <NavLink to={"/portal"}>Register/Login</NavLink>}
                </Nav>
            </Row>
        </Container>
    );
}

export default Navigation;