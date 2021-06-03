import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row, Button} from "react-bootstrap";
import DyeItem from "./DyeItem";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {addVoteToFirebase, getUser} from "../../lib/js/functions"

function ItemDetailView({itemList, logIn, user, setUser}) {
    let {itemID} = useParams()
    const [item, setItem] = useState([])
    const [vote, setVote] = useState()
    const [votedBefore, setVotedBefore] = useState(false)
    let findDyes;

    function findVote() {
        let foundVote = user.votedItems?.find(element => element === itemID);
        console.log(foundVote)
        if (foundVote) {
            setVotedBefore(true)
        }
    }

    useEffect(() => {
        let foundItem = itemList.find(element => element.id === itemID)
        setVote(parseInt(foundItem.totalVotes))
        setItem(foundItem)
        findVote()
    }, [itemID])

    if (item) {
        findDyes = item.dyesList;
    }

    function addVoteToItem(){
        setVote(prevState => prevState + 1)
        getUser(setUser)
        setVotedBefore(true)
    }

    useEffect(()=>{
        addVoteToFirebase(item.id, vote, user.uid)
        findVote()
    },[vote])


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
                                   target="_blank" rel="noreferrer" ><Image src="https://wakaguide.com/images/dti.png"/></a>
                                <a href={`https://impress-2020.openneo.net/items/search/${item.name}`}
                                   target="_blank" rel="noreferrer" ><Image src="https://wakaguide.com/images/2020dti.png"/></a>
                                <a href={`https://items.jellyneo.net/search/?name=${item.name}&name_type=1`}
                                   target="_blank" rel="noreferrer" ><Image src="https://wakaguide.com/images/jn.png"/></a>
                            </span>
                        </Col>
                        <Col className="col-12 mt-2">
                            {item.description}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="col-6 my-2 align-self-center"><h6 className={"mb-0"}>Last voted: {vote}</h6></Col>
                {(logIn === true && votedBefore === false) && <Col className="col-6 text-right my-2"><Button onClick={addVoteToItem}><FontAwesomeIcon
                    icon={faPlusSquare}/> Vote</Button></Col>}
                {(logIn === true && votedBefore === true) && <Col className="col-6 text-right my-2"><Button disabled>Voted</Button></Col>}
            </Row>
            <Row className="recentCtn">
                {findDyes ? findDyes.map((item, index) => (
                    <DyeItem key={index} itemDetail={true} item={item}/>
                )) : <Col className="my-4 col-12">No unoffical dyes submitted</Col>}
            </Row>
        </Container>
    );
}

export default ItemDetailView;