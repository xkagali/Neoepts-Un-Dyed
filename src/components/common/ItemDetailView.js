import React from 'react';
import {Col, Container, Image, Row, Card, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faHeart} from "@fortawesome/free-solid-svg-icons";

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
            <Row className="my-4">
                <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
                <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
                <Row className="recentCtn mx-0">
                    <Col className="my-4"><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
                        <div className={"overlayCtn"}>
                            <div className="overlayText">
                                <span className="title">Silver Key Garland</span>
                                <span className="creator">Submitted by Kagali</span>
                                <div className="iconsCtn mt-4">
                                    <input id="toggleLikes" type="checkbox"/>
                                    <label htmlFor="toggleLikes">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-4"><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
                        <div className={"overlayCtn"}>
                            <div className="overlayText">
                                <span className="title">Silver Key Garland</span>
                                <span className="creator">Submitted by Kagali</span>
                                <div className="iconsCtn mt-4">
                                    <input id="toggleLikes" type="checkbox"/>
                                    <label htmlFor="toggleLikes">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-4"><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
                        <div className={"overlayCtn"}>
                            <div className="overlayText">
                                <span className="title">Silver Key Garland</span>
                                <span className="creator">Submitted by Kagali</span>
                                <div className="iconsCtn mt-4">
                                    <input id="toggleLikes" type="checkbox"/>
                                    <label htmlFor="toggleLikes">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-4"><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
                        <div className={"overlayCtn"}>
                            <div className="overlayText">
                                <span className="title">Silver Key Garland</span>
                                <span className="creator">Submitted by Kagali</span>
                                <div className="iconsCtn mt-4">
                                    <input id="toggleLikes" type="checkbox"/>
                                    <label htmlFor="toggleLikes">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
                <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
            </Row>
        </Container>
    );
}

export default ItemDetailView;