import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="py-5 mt-5 text-center footer">
            <Row>
                <Col>This website is currently in development and is not ready for use.<br/><br/>
                    © 1999-2021 Neopets, Inc. All rights reserved. Used With Permission.<br />
                    Special thanks to Matchu (DTI).
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;