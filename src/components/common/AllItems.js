import React from 'react';
import {Col, Image, Card} from "react-bootstrap"
import {NavLink} from "react-router-dom";

function AllItems({item, itemListView}) {
    return (
        <>
            <Col key={item.id} className={itemListView && "col-2 my-3"}>
                <NavLink to={`/items/:itemID`}>
                    <Card>
                        <div className="votedCtn">
                            <Image src={item.thumbnailUrl} fluid/>
                            {!itemListView && <>
                                <div className={"overlayCtn"}>
                                    <div className="overlayText">
                                        votes<br/>{item.totalVotes}
                                    </div>
                                </div>
                            </>}
                        </div>
                        <Card.Body className={"d-flex align-items-center justify-content-center"}>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </NavLink>
            </Col>
        </>
    )
}

export default AllItems;