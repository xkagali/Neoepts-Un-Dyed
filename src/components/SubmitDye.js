import React from 'react';
import {Col, Container, Row, Form} from "react-bootstrap";

function SubmitDye({itemList}) {
    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Form.Control as="select" name={"id"}>
                        <option value={``}>Item Name</option>
                        {itemList.map((item)=>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>
        </Container>
    );
}

export default SubmitDye;