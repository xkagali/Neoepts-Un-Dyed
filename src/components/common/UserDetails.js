import React from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import AllItems from "./AllItems";

function UserDetails() {
    return (
        <Container>
            <Row className={"my-4"}>
                <Col>
                    <h4>Kagali</h4>
                </Col>
            </Row>
            <Tabs defaultActiveKey="dyes" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="dyes" title="Unofficial Dyes">
                    <AllItems />
                </Tab>
                <Tab eventKey="likes" title="Likes">
                    <AllItems />
                </Tab>
                <Tab eventKey="settings" title="Settings">
                </Tab>
            </Tabs>
        </Container>
    );
}

export default UserDetails;