import React from 'react';
import {Col, Image, Row, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom"
import {faCaretLeft, faCaretRight, faHeart} from "@fortawesome/free-solid-svg-icons";

function AllDyes({mostRecent, itemDetail, recentItems}) {
    return (
        <Row className="my-4">
            {(!mostRecent && !itemDetail) && <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>}
            {(!mostRecent && !itemDetail) && <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>}
            <Row className="recentCtn mx-0">
                {mostRecent && recentItems.map(item=>(
                    <Col className="my-4" key={item.id}>
                        <NavLink to={`/items/${item.id}`}>
                            <Image src={item.imageUrl} fluid className="border"/>
                            <div className={"overlayCtn"}>
                                <div className="overlayText">
                                    <span className="title">{item.name}</span>
                                    <span className="creator">Submitted by {item.creator}</span>
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
                ))

                }
            </Row>
            {!mostRecent && <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>}
            {!mostRecent && <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>}
        </Row>
    );
}

export default AllDyes;