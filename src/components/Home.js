import React from 'react';
import {Row, Col, Container, Image, Card} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import AllDyes from "./common/AllDyes";
import AllItems from "./common/AllItems";

function Home({itemList}) {
    let sortVotes = itemList.sort((a, b) => {
        return b.totalVotes - a.totalVotes
    })

    let topTenVoted = [];

    for (let i = 0; i < sortVotes.length; i++) {
        if (i <= 9) {
            topTenVoted.push(sortVotes[i])
        }
    }

    return (
        <Container>
            <Row className="my-4">
                <Col className={"col-12 d-flex flex-column justify-content-center align-items-center"}>
                    <h1 className={"brandtitle"}>Neopets <span className={"colorChange"}>Un-dyed</span></h1>
                    <div className={"subtitle my-3"}>a site for unofficial dyeworks contributed by creators</div>
                    <div className="searchHomeCtn my-4">Does <input type="text" className="searchHome rounded"/> have any unofficial dyes?</div>
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
                            <AllItems item={items} itemList={itemList} />
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
                <AllDyes mostRecent={true} />
            </Row>
        </Container>
    );
}

export default Home;