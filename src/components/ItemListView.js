import React, {useState} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import AllItems from "./common/AllItems";
import {useLocation} from "react-router-dom";

function ItemListView({itemList}) {
    //get query string from search here, then use it to filter array
    const location = useLocation();
    // console.log(location.search)  // for query strings;
    let queryStr = location.search.substr(location.search.indexOf("=") + 1,location.search.length);
    console.log(queryStr)

    let foundItems = itemList.filter(element => element.name.toLowerCase().includes(queryStr.toLowerCase()))
    console.log(foundItems)

    // const [items30, set30Items] = React.useState([])
    let curr30 = [];

    if(foundItems){
        for (let i = 0; i < foundItems.length; i++) {
            if (i <= 29) {
                curr30.push(foundItems[i])
            }
        }
    }else if(!foundItems){
        curr30 = [];
    }else{
        for (let i = 0; i < itemList.length; i++) {
            if (i <= 29) {
                curr30.push(itemList[i])
            }
        }
    }

    return (
        <Container>
            <Row className="my-4">
                {curr30.length > 0 && <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>}
                {curr30.length > 0 && <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>}
                <Col className={"col-12"}>
                    <Row className={"my-2 align-items-stretch"}>
                        {curr30 && curr30.length < 4 ? curr30.map(items=>(
                            <AllItems key={items.id} item={items} itemListViewLess={true}/>
                        )) : curr30.map(items=>(
                            <AllItems key={items.id} item={items} itemListView={true}/>
                        ))}
                        {curr30.length === 0 && <Col className={"col-12 text-center"}>No item found</Col> }
                    </Row>
                </Col>
                {curr30.length > 0 && <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>}
                {curr30.length > 0 && <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>}
            </Row>
        </Container>
    );
}

export default ItemListView;