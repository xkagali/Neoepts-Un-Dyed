import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Success() {
    return (
        <Container className={"my-4"}>
            <Row>
                <Col className="col-12 text-center">
                    <h1>Registration Complete!</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Success;