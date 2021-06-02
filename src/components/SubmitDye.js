import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import {addDyeToFireBase} from "../lib/js/functions";

function SubmitDye({itemList}) {

    const [newDye, setNewDye] = useState([])

    function change(e){
        setNewDye(currState => ({...currState, ...{[e.target.name] : e.target.value}}))
    }

    function addDyesToItem(){
        let temp = {
            creator: newDye.creator,
            imageUrl: newDye.imageUrl,
            dateSubmitted: new Date()
        }
        addDyeToFireBase(temp, newDye.id)
    }

    console.log(newDye)

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col className="col-6">
                    Choose Item
                    <Form.Control as="select" onChange={change} name={"id"}>
                        <option value={``}>Item Name</option>
                        {itemList.map((item)=>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-6">
                    Dye image url (direct link from imgur.com)
                    <Form.Control name={"imageUrl"} onChange={change} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-6">
                    Creator name
                    <Form.Control name={"creator"} onChange={change} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Button onClick={addDyesToItem}>Submit Dye</Button>
            </Row>
        </Container>
    );
}

export default SubmitDye;