import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

function Preloader() {
    return (
        <Container>
            <Row className="headerSection">
                <Col className={"col-12 d-flex flex-column justify-content-center align-items-center"}>
                    <h1 className={"brandtitle"}>Neopets <span className={"colorChange"}>Un-dyed</span></h1>
                    <div className={"subtitle my-3"}>a site for unofficial dyeworks made by neopets users</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Preloader;