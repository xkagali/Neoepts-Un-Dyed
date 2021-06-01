import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row, Button} from "react-bootstrap";
import DyeItem from "./DyeItem";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";

function ItemDetailView({itemList}) {
    let {itemID} = useParams()

    const [item, setItem] = useState([])
    // const [vote, setVote] = useState()
    let findDyes;
    useEffect(() => {
        let foundItem = itemList.find(element => element.id === itemID)
        setItem(foundItem)
    }, [itemID])

    if (item) {
        findDyes = item.dyesList;
    }


    return (
        <Container>
            <Row className="my-4">
                <Col className="col flex-grow-0">
                    <Image src={item.thumbnailUrl}/>
                </Col>
                <Col className="col flex-grow-1">
                    <Row>
                        <Col className="col-12 d-flex align-items-center itemView">
                            <h1>{item.name}</h1>
                            <span className="shortcuts">
                                <a href={`https://impress.openneo.net/items?utf8=%E2%9C%93&q=${item.name}`}
                                   target="_blank"><Image src="https://wakaguide.com/images/dti.png"/></a>
                                <a href={`https://impress-2020.openneo.net/items/search/${item.name}`}
                                   target="_blank"><Image src="https://wakaguide.com/images/2020dti.png"/></a>
                                <a href={`https://items.jellyneo.net/search/?name=${item.name}&name_type=1`}
                                   target="_blank"><Image src="https://wakaguide.com/images/jn.png"/></a>
                            </span>
                        </Col>
                        <Col className="col-12 mt-2">
                            {item.description}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="col-6 my-2 align-self-center"><h6 className={"mb-0"}>Last voted: </h6></Col>
                <Col className="col-6 text-right my-2"><Button><FontAwesomeIcon
                    icon={faPlusSquare}/> Vote</Button></Col>
            </Row>
            <Row className="recentCtn">
                {findDyes ? findDyes.map(item => (
                    <DyeItem itemDetail={true} item={item}/>
                )) : "Loading..."}
            </Row>
        </Container>
    );
}

export default ItemDetailView;