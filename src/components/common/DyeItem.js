import React from 'react';
import {NavLink} from "react-router-dom";
import {Col, Image} from "react-bootstrap";

function DyeItem({item, allDyes, itemDetail, home, userProfile}) {

    return (
        <Col className={allDyes || itemDetail ? "col-3 my-4" : "my-4"} key={item.id}>
            {(home || allDyes || userProfile) && <NavLink to={`/items/${item.id}`}>
                <Image src={item.imageUrl} fluid className="border"/>
                <div className={"overlayCtn"}>
                    <div className="overlayText">
                        {!itemDetail && <span className="title">{item.name}</span>}
                        {!userProfile && <span className="creator">Submitted by {item.creator}</span>}
                    </div>
                </div>
            </NavLink>
            }
            {(!home && !allDyes && !userProfile) && <>
                <Image src={item.imageUrl} fluid className="border"/>
                {!userProfile && <div className={"overlayCtn"}>
                    <div className="overlayText">
                        {!itemDetail && <span className="title">{item.name}</span>}
                        <span className="creator">Submitted by {item.creator}</span>
                    </div>
                </div>}
            </>
            }
        </Col>
    );
}

export default DyeItem;