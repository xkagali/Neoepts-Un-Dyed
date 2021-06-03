import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import AllItems from "./common/AllItems";
import {useLocation} from "react-router-dom";

function ItemListView({itemList}) {
    itemList.sort((a,b)=>{
        return b.name - a.name
    })
    let foundItems;
    const [itemsAll, setAllItems] = useState([])
    const [counter, setCounter] = useState(30)
    const [offset, setOffset] = useState(0)
    //get query string from search here, then use it to filter array
    const location = useLocation();

    if(location.search){
        let queryStr = location.search.substr(location.search.indexOf("=") + 1,location.search.length);
        foundItems = itemList.filter(element => element.name.toLowerCase().includes(queryStr.toLowerCase()));
    }

    useEffect(()=>{
        let filtered;
        if (foundItems){ //if there's a search query
            filtered = foundItems.filter((items,index)=>{
                // return index < counter //find first 30 items
                return index >= offset && index < counter // index more than or = to 0, index less than 30
            })
        }else{
            filtered = itemList.filter((items,index)=>{
                // return index < counter  //find first 30 items
                return index >= offset && index < counter // index more than or = to 0, index less than 30
            })
        }
        setAllItems(filtered)
    },[location.search,counter])

    function getNext30(){
        //counter cannot go above itemList.length
        if(counter < itemList.length){
            setCounter(prevState => prevState + 30)
        }else if (counter >= itemList.length){
            setCounter(itemList.length)
        }

        //offset cannot go above itemList.length - 30
        if(offset < itemList.length - 30){
            setOffset(prevState => prevState + 30)
        }else if (offset >= itemList.length - 30){
            setOffset(itemList.length - 30)
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
        <Container>
            <Row className="my-4">
                <Col className="col-6 my-2"><Button onClick={getPrev30}><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
                <Col className="col-6 text-right my-2"><Button onClick={getNext30}>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
                <Col className={"col-12"}>
                    <Row className={"my-2 align-items-stretch"}>
                        {itemsAll && itemsAll.length < 4 ? itemsAll.map(items=>(
                            <AllItems key={items.id} item={items} itemListViewLess={true}/>
                        )) : itemsAll.map(items=>(
                            <AllItems key={items.id} item={items} itemListView={true}/>
                        ))}
                        {itemsAll.length === 0 && <Col className={"col-12 text-center"}>No item found</Col> }
                    </Row>
                </Col>
                <Col className="col-6 my-2"><Button onClick={getPrev30}><FontAwesomeIcon icon={faCaretLeft} /> Prev</Button></Col>
                <Col className="col-6 text-right my-2"><Button onClick={getNext30}>Next <FontAwesomeIcon icon={faCaretRight} /></Button></Col>
            </Row>
        </Container>
    );
}

export default ItemListView;