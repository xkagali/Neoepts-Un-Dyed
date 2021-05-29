import React from 'react';
import {Row, Col, Container, Image, Card} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom"

function Home() {
    return (
        <Container>
            <Row className="my-4">
                <Col className={"col-12 d-flex flex-column justify-content-center align-items-center"}>
                    <h1 className={"brandtitle"}>Neopets <span className={"colorChange"}>Un-dyed</span></h1>
                    <div className={"subtitle my-3"}>a site for unofficial dyeworks contributed by creators</div>
                    <div className="searchHomeCtn my-4">Does <input type="text" className="searchHome rounded"/> have any unofficial dyes?</div>
                </Col>
            </Row>
            <Row>
                <Col className={"col-12 pt-5"}>
                    <Row>
                        <Col className={"col-6 d-flex flex-row align-items-center"}><h5 className="mr-2">Top 10 Voted Items</h5> <h6>this month</h6></Col>
                        <Col className={"col-6 d-flex flex-row align-items-center justify-content-end"}><h6>previous month</h6></Col>
                    </Row>
                </Col>
                <Row className={"my-2 mx-0"}>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                <div className="overlayText">
                                    votes<br/>100
                                </div>
                            </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="votedCtn">
                                <Image src="http://images.neopets.com/items/mall_gar_ombrecurtains.gif" fluid/>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>100
                                    </div>
                                </div></div>
                            <Card.Body>
                                <Card.Title>Oceanic Ombre Curtains</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col className={"col-12 pt-5 d-flex flex-row align-items-center"}>
                    <h5 className="mr-2">Most Recent Unofficial Dyeworks</h5> <NavLink to={"/unofficial-dyes"}><h6>view all</h6></NavLink>
                </Col>
                <Row className={"my-2 mx-0 recentCtn"}>
                    <Col><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    <Col><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    <Col><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    <Col><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    <Col><Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
            </Row>
        </Container>
    );
}

export default Home;