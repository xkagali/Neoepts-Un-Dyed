import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="py-5 mt-5 text-center footer">
            <Row>
                <Col>
                    © 1999-2021 Neopets, Inc. All rights reserved. Used With Permission.<br />
                    Special thanks to Matchu (DTI) for the API<br /><br />

                </Col>
            </Row>
        </Container>
    );
}

export default Footer;