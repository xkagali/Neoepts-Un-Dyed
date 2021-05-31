import React, {useState} from 'react';
import {Row, Col, Container} from "react-bootstrap"
import {NavLink, useHistory} from "react-router-dom"
import AllItems from "./common/AllItems";
import DyeItem from "./common/DyeItem";

function Home({itemList}) {

    const [item, setItem] = useState()
    let sortVotes = itemList.sort((a, b) => {
        return b.totalVotes - a.totalVotes
    })
    let topTenVoted = [];
    for (let i = 0; i < sortVotes.length; i++) {
        if (i <= 9) {
            topTenVoted.push(sortVotes[i])
        }
    }

    let recentDyes = []
    itemList.forEach(item=>{
        if(item.dyesList){ //if dyelist exists
            item.dyesList.forEach(submit =>{ //for each dyework submission, create a new obj
                let newObj = {
                    "name": item.name,
                    "id": item.id,
                    "creator": submit.creator,
                    "imageUrl": submit.imageUrl,
                    "dateSubmitted": submit.dateSubmitted,
                    "dyeID": submit.dyeId
                }
                recentDyes.push(newObj) //push into array
            })
        }
    })
    //sort array
    let filtered = recentDyes.sort((a,b) => {
        return b.dyeID - a.dyeID;
    }).filter((value,index)=>{
        return index < 4
    })

    const history = useHistory()

    function searchCheck(e){
        console.log(e.target.value)
        // if (e.key === 'Enter') {
        //     history.push("/items?q=fan")
        // }
    }

    return (
        <Container>
            <Row className="my-4">
                <Col className={"col-12 d-flex flex-column justify-content-center align-items-center"}>
                    <h1 className={"brandtitle"}>Neopets <span className={"colorChange"}>Un-dyed</span></h1>
                    <div className={"subtitle my-3"}>a site for unofficial dyeworks contributed by creators</div>
                    <div className="searchHomeCtn my-4">Does <input type="text" onKeyPress={(e) => searchCheck(e)} value={item} onChange={(e)=> setItem(e.target.value)} className="searchHome rounded"/> have any unofficial dyes?</div>
                </Col>
            </Row>
            <Row>
                <Col className={"col-12 pt-5"}>
                    <Row>
                        <Col className={"col-6 d-flex flex-row align-items-center"}><h5 className="mr-2">Top 10 Voted Items</h5> <h6>this month</h6></Col>
                        <Col className={"col-6 d-flex flex-row align-items-center justify-content-end"}><NavLink to={"/items"}><h6>view all items</h6></NavLink></Col>
                    </Row>
                </Col>
                <Row className={"my-2 mx-0 d-flex align-items-stretch"}>
                    {topTenVoted ?
                        topTenVoted.map(items => (
                            <AllItems key={items.id} item={items} itemList={itemList} />
                        )) : "Loading..."
                    }
                </Row>
            </Row>
            <Row className="mx-0">
                <Col className={"col-12 pt-5 px-0"}>
                    <Row>
                        <Col className={"col-6 d-flex flex-row align-items-center"}><h5 className="mr-2">Most Recent Unofficial Dyeworks</h5></Col>
                        <Col className={"col-6 d-flex flex-row align-items-center justify-content-end"}><NavLink to={"/unofficial-dyes"}><h6>view all recent unofficial dyes</h6></NavLink></Col>
                    </Row>
                </Col>
                <Row className="recentCtn">
                    {filtered ?
                        filtered.map(items =>(
                            <DyeItem key={items.id} item={items} />
                        )) : "Loading..."
                    }
                </Row>
            </Row>
        </Container>
    );
}

export default Home;