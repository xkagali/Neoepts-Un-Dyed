import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="py-5 mt-5 text-center footer">
            <Row>
                <Col>Disclaimer: This app was developed for a school project. It is not for public use.<br/><br/>
                    © 1999-2021 Neopets, Inc. All rights reserved. Used With Permission.<br />
                    Special thanks to Matchu (developer of DTI) for all the item information used in this app.
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;