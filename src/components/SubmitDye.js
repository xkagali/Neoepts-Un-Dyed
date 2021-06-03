import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Form, Button, Image} from "react-bootstrap";
import {addDyeToFireBase} from "../lib/js/functions";
import {Redirect, useHistory} from "react-router-dom";

function SubmitDye({itemList, logIn, user}) {
    const [newDye, setNewDye] = useState([])
    const [previewUrl, setThumbnail] = useState("")
    const history = useHistory()

    function change(e) {
        setNewDye(currState => ({...currState, ...{[e.target.name]: e.target.value}}))
    }

    useEffect(()=>{
        let foundItem = itemList.find(element => element.id === newDye.id)
        if (foundItem){
            setThumbnail(foundItem.thumbnailUrl)
        }
    },[newDye])

    function addDyesToItem(){
        let temp = {
            uid: user.uid,
            creator: user.displayName,
            imageUrl: newDye.imageUrl,
            dateSubmitted: new Date()
        }

        addDyeToFireBase(temp, newDye.id)
        history.push(`/user/${user.id}`)
    }

    if(logIn === false){
        return <Redirect to={"/portal"} />
    }

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col className="col-2 mb-4">
                    {previewUrl && <Image src={previewUrl} fluid />}
                </Col>
                <Col className="col-6 mb-4">
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
                <Col className="col-2 mb-4">
                </Col>
                <Col className="col-6 mb-4">
                    Dye image url (direct link from imgur.com)
                    <Form.Control name={"imageUrl"} onChange={change} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Button onClick={addDyesToItem}>Submit Dye</Button>
            </Row>
        </Container>
    );
}

export default SubmitDye;