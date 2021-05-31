import React from 'react';
import {Col, Image, Row, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom"
import {faCaretLeft, faCaretRight, faHeart, faPlusSquare} from "@fortawesome/free-solid-svg-icons";

function AllDyes({mostRecent, allDyes}) {
    return (
        <Row className="my-4">
            {!mostRecent && <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>}
            {!mostRecent && <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>}
            {!mostRecent || !allDyes && <Col className="col-6 my-2 align-self-center"><h6 className={"mb-0"}>Last voted: </h6></Col>}
            {!mostRecent || !allDyes && <Col className="col-6 text-right my-2"><Button><FontAwesomeIcon icon={faPlusSquare} /> Vote</Button></Col>}
            <Row className="recentCtn mx-0">
                <Col className="my-4">
                    <NavLink to={`/items/:itemID`}>
                        <Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    </NavLink>
                </Col>
                <Col className="my-4">
                    <NavLink to={`/items/:itemID`}>
                        <Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    </NavLink>
                </Col>
                <Col className="my-4">
                    <NavLink to={`/items/:itemID`}>
                        <Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    </NavLink>
                </Col>
                <Col className="my-4">
                    <NavLink to={`/items/:itemID`}>
                        <Image src="http://i.imgur.com/a3uHPdA.jpg" fluid className="border"/>
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
                    </NavLink>
                </Col>
            </Row>
            {!mostRecent && <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>}
            {!mostRecent && <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>}
        </Row>
    );
}

export default AllDyes;