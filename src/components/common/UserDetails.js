import React from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import DyeItem from "./DyeItem";
import {Redirect} from "react-router-dom";
import AllItems from "./AllItems";

function UserDetails({user, logIn, itemList}) {

    if(logIn === false){
        return <Redirect to={"/portal"} />
    }

    let userDyes = []
    itemList.forEach(item=>{
        if(item.dyesList){ //if dyelist exists
            //for each dyework submission
            for (let i = 0; i < item.dyesList.length; i++){
                //find if userID is the same as current user
                if(item.dyesList[i].uid === user.uid){
                    //if same, push into array
                    let newObj = {
                        "id": item.id,
                        "name": item.name,
                        "imageUrl": item.dyesList[i].imageUrl,
                        "dateSubmitted": item.dyesList[i].dateSubmitted,
                        "uid": item.dyesList[i].uid
                    }
                    userDyes.push(newObj);
                }
            }
        }
    })
    userDyes.sort((a,b)=>{
        return b.dateSubmitted - a.dateSubmitted
    })
    let userVotes = []
    for (let i = 0; i < user.votedItems.length; i++){
        // console.log(user.votedItems[i])
        let findVotes = itemList.find(element => element.id === user.votedItems[i])
        userVotes.push(findVotes)
    }

    return (
        <Container>
            <Row className={"my-4"}>
                <Col>
                    <h4>{user.displayName}</h4>
                </Col>
            </Row>
            <Tabs defaultActiveKey="dyes" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="dyes" title="Unofficial Dyes">
                    <Row className="recentCtn">
                        {userDyes.map((dyes,index)=>(
                            <DyeItem key={index} item={dyes} userProfile={true} user={user} />
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="voted" title="Voted">
                    <Row className={"my-2 align-items-stretch"}>
                        {userVotes.map(items=>(
                            <AllItems key={items.id} item={items} userProfile={true}/>
                        ))}
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default UserDetails;