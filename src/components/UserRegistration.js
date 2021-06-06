import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import {Redirect, useHistory} from "react-router-dom";
import firebase from "../lib/js/firebase";
import "firebase/auth";
const db = firebase.firestore();

function UserRegistration({logIn}) {

    const history = useHistory()
    const [tempAcc, setTempAcc] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    function change(e){
        setTempAcc({...tempAcc, [e.target.name]:e.target.value})
    }

    function loginChange(e){
        setLogin({...login, [e.target.name]:e.target.value})
    }

    // function checkPassword(e){
    //     if(tempAcc.password === tempAcc.confirmPassword){
    //         setUpAccount()
    //     }else{
    //         alert("password does not match");
    //     }
    //     e.preventDefault();
    // }

    // function setUpAccount(){
    //     firebase.auth().createUserWithEmailAndPassword(tempAcc.email, tempAcc.password)
    //         .then((userCredential) => {
    //             history.push('/success')
    //             db.collection("userList")
    //                 .doc(`${userCredential.user.uid}`)
    //                 .set({
    //                     displayName: tempAcc.displayName,
    //                     uid: userCredential.user.uid
    //                 })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     firebase.auth().signOut();
    // }

    function checkLogin(e){
        firebase.auth().signInWithEmailAndPassword(login.email, login.password)
            .then(() => {
                history.push('/')
            })
            .catch((error) => {
                console.log(error);
            });
        e.preventDefault();
    }

    if(logIn === true){
        return <Redirect to={"/"} />
    }

    return (
        <Container>
            <Row className="my-4 justify-content-around">
                <Col className={"col-4"}>
                    <h2>Register</h2>
                    Registration is closed as site is not meant for public use.<br /><br />
                    {/*{tempAcc.error && <h4>{tempAcc.error}</h4>}*/}
                    {/*<Form>*/}
                    {/*    <Form.Group className="mb-3">*/}
                    {/*        <Form.Label>Display Name</Form.Label>*/}
                    {/*        <Form.Control type="text" name={"displayName"} onChange={change} placeholder="Enter your display name" />*/}
                    {/*    </Form.Group>*/}

                    {/*    <Form.Group className="mb-3">*/}
                    {/*        <Form.Label>Email</Form.Label>*/}
                    {/*        <Form.Control type="email" name={"email"} onChange={change} placeholder="Enter email" />*/}
                    {/*    </Form.Group>*/}

                    {/*    <Form.Group className="mb-3">*/}
                    {/*        <Form.Label>Password</Form.Label>*/}
                    {/*        <Form.Control type="password" name={"password"} onChange={change} placeholder="Password" />*/}
                    {/*    </Form.Group>*/}

                    {/*    <Form.Group className="mb-3">*/}
                    {/*        <Form.Control type="password" name={"confirmPassword"} onChange={change} placeholder="Confirm Password" />*/}
                    {/*    </Form.Group>*/}
                    {/*    <Button onClick={checkPassword} variant="primary" type="submit">*/}
                    {/*        Submit*/}
                    {/*    </Button>*/}
                    {/*</Form>*/}
                </Col>
                <Col className={"col-4"}>
                    <h2>Login</h2>
                    If you'd like a test login account, please contact me.
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name={"email"} onChange={loginChange} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name={"password"} onChange={loginChange} placeholder="Password" />
                        </Form.Group>
                        <Button onClick={checkLogin} variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UserRegistration;