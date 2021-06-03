import React from 'react';
import {NavLink} from "react-router-dom";
import {Col, Image, Button} from "react-bootstrap";
import {deleteDyeFromFirebase} from "../../lib/js/functions";

function DyeItem({item, allDyes, itemDetail, home, userProfile, user}) {
    function checkDelete(e){
        if(user.uid === item.uid){
            let temp = {
                creator: user.displayName,
                dateSubmitted: item.dateSubmitted,
                imageUrl: item.imageUrl,
                uid: user.uid
            }
            deleteDyeFromFirebase(item, temp)
        }
        e.preventDefault()
    }

    return (
        <>
            <Col className="px-0">
                <Col className={`dyeOverlay ${allDyes} || ${itemDetail} ? "col-3 my-4" : "my-4"`} key={item.id}>
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
                <Col className="mt-2">{userProfile && <Button onClick={checkDelete}>Delete</Button>}</Col>
            </Col>
        </>
    );
}

export default DyeItem;