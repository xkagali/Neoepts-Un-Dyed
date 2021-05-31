import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Image} from "react-bootstrap";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

function DyeItem({item, allDyes, itemDetail}) {
    return (
        <Col className={allDyes || itemDetail ? "col-3 my-4" : "my-4"} key={item.id}>
            <NavLink to={`/items/${item.id}`}>
                <Image src={item.imageUrl} fluid className="border"/>
                <div className={"overlayCtn"}>
                    <div className="overlayText">
                        {!itemDetail && <span className="title">{item.name}</span>}
                        <span className="creator">Submitted by {item.creator}</span>
                        {/*<div className="iconsCtn mt-4">*/}
                        {/*    <input id="toggleLikes" type="checkbox"/>*/}
                        {/*    <label htmlFor="toggleLikes">*/}
                        {/*        <FontAwesomeIcon icon={faHeart} />*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </NavLink>
        </Col>
    );
}

export default DyeItem;