import React from 'react';
import {Col, Row, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import DyeItem from "./common/DyeItem";

function AllDyesView({itemDetail, itemList}) {

    let recentDyes = []
    itemList.forEach(item=>{
        if(item.dyesList){ //if dyelist exists
            item.dyesList.forEach(submit =>{ //for each dyework submission, create a new obj
                let newObj = {
                    "name": item.name,
                    "id": item.id,
                    "creator": submit.creator,
                    "imageUrl": submit.imageUrl,
                    "dateSubmitted": submit.dateSubmitted
                }
                recentDyes.push(newObj) //push into array
            })
        }
    })
    //sort array
    let filtered = recentDyes.sort((a,b) => {
        return b.dateSubmitted - a.dateSubmitted;
    }).filter((value,index)=>{
        return index < 30
    })

    return (
        <Row className="my-4">
            {!itemDetail && <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>}
            {!itemDetail && <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>}
            <Row className="recentCtn mx-0">
                {filtered ?
                    filtered.map((items,index) =>(
                        <DyeItem allDyes={true} key={index} item={items} />
                    )) : ""
                }
            </Row>
            <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
            <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
        </Row>
    );
}

export default AllDyesView;