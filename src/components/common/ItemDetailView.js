import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import AllDyes from "./AllDyes";

function ItemDetailView() {
    return (
        <Container>
            <Row className="my-4">
                <Col className="col flex-grow-0">
                    <Image src="http://images.neopets.com/items/mall_dewybubbles.gif" />
                </Col>
                <Col className="col flex-grow-1">
                    <Row>
                        <Col className="col-12 d-flex align-items-center itemView">
                            <h1>Dewy Butterfly Bubbles</h1>
                            <span className="shortcuts">
                                <a href="#" target="_blank"><Image src="https://wakaguide.com/images/dti.png" /></a>
                                <a href="#" target="_blank"><Image src="https://wakaguide.com/images/2020dti.png" /></a>
                                <a href="#" target="_blank"><Image src="https://wakaguide.com/images/jn.png" /></a>
                            </span>
                        </Col>
                        <Col className="col-12 mt-2">
                            Everything you need to watch the game is in this bag. All you need to worry about is finding your seat!
                        </Col>
                    </Row>
                </Col>
            </Row>
            <AllDyes />
        </Container>
    );
}

export default ItemDetailView;