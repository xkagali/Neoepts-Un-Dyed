import React from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import AllItems from "./common/AllItems";

function ItemListView({itemList}) {
    //get query string from search here, then use it to filter array



    // const [items30, set30Items] = React.useState([])
    let curr30 = [];

    for (let i = 0; i < itemList.length; i++) {
        if (i <= 29) {
            curr30.push(itemList[i])
        }
    }

    return (
        <Container>
            <Row className="my-4">
                <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
                <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
                <Row className={"my-2 mx-0 d-flex align-items-stretch"}>
                    {curr30.map(items=>(
                        <AllItems item={items} itemListView={true}/>
                    ))}
                </Row>
                <Col className="col-6 my-2"><Button><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
                <Col className="col-6 text-right my-2"><Button>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
            </Row>
        </Container>
    );
}

export default ItemListView;