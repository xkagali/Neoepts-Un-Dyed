import React, {useEffect, useState} from 'react';
import {Col, Row, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import DyeItem from "./common/DyeItem";

function AllDyesView({itemDetail, itemList}) {
    const [counter, setCounter] = useState(30)
    const [offset, setOffset] = useState(0)
    const [dyesAll, setAllDyes] = useState([])

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

    useEffect(()=>{
        let filtered = recentDyes.sort((a,b) => {
                return b.dateSubmitted - a.dateSubmitted;
            }).filter((value,index)=>{
                // return index < counter //find first 30 items
                return index >= offset && index < counter // index more than or = to 0, index less than 30
            })
        setAllDyes(filtered)
    },[counter])

    function getNext30(){
        //counter cannot go above itemList.length
        if(counter < recentDyes.length){
            setCounter(prevState => prevState + 30)
        }else if (counter >= recentDyes.length){
            setCounter(recentDyes.length)
        }

        //offset cannot go above itemList.length - 30
        if(offset < recentDyes.length - 30){
            setOffset(prevState => prevState + 30)
        }else if (offset >= recentDyes.length - 30){
            setOffset(recentDyes.length - 30)
        }
    }

    function getPrev30(){
        //counter cannot go below 30
        if(counter >= 31){
            setCounter(prevState => prevState - 30)
        }else {
            setCounter(30)
        }
        //offset cannot go below 0
        if(offset >= 30){
            setOffset(prevState => prevState - 30)
        }else{
            setOffset(0)
        }
    }

    return (
        <Row className="my-4">
            <Col className="col-6 my-2"><Button onClick={getPrev30}><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
            <Col className="col-6 text-right my-2"><Button onClick={getNext30}>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
            <Row className="recentCtn mx-0">
                {dyesAll ?
                    dyesAll.map((items,index) =>(
                        <DyeItem allDyes={true} key={index} item={items} />
                    )) : ""
                }
            </Row>
            <Col className="col-6 my-2"><Button onClick={getPrev30}><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
            <Col className="col-6 text-right my-2"><Button onClick={getNext30}>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
        </Row>
    );
}

export default AllDyesView;