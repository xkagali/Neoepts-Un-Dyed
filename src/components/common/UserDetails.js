import React, {useEffect} from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import AllItems from "./AllItems";
import {useParams} from "react-router-dom";
import DyeItem from "./DyeItem";

function UserDetails({user, logIn, itemList}) {
    let {userID} = useParams()

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
                        "imageUrl": item.dyesList[i].imageUrl
                    }
                    userDyes.push(newObj);
                }
            }
        }
    })
    console.log(userDyes)

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
                            <DyeItem key={index} item={dyes} userProfile={true} />
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="voted" title="Voted">
                </Tab>
            </Tabs>
        </Container>
    );
}

export default UserDetails;