import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home"
import ItemDetailView from "./components/common/ItemDetailView";
import ItemListView from "./components/ItemListView";
import Footer from "./components/common/Footer";
import UserDetails from "./components/common/UserDetails";
import UserRegistration from "./components/UserRegistration";
import AllDyesView from "./components/AllDyesView";
import {Container} from "react-bootstrap";
import {getItemsFromFirebase, getUser} from "./lib/js/functions";
import SubmitDye from "./components/SubmitDye";
import Success from "./components/Success";
import firebase from "firebase";
import "firebase/auth";

function App() {
    const [allItems, setItems] = useState();
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        getItemsFromFirebase(setItems)

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                getUser(setUser)
                setLoggedIn(true)
            }
        });
    }, [])

    return (
        <BrowserRouter>
            {allItems && <>
                <Navigation home={true} logIn={loggedIn} resetLogIn={setLoggedIn} user={user} resetUser={setUser}/>
                <Switch>
                    <Route path="/" exact>
                        <Home itemList={allItems}/>
                    </Route>
                    <Route path="/items" exact>
                        <ItemListView itemList={allItems}/>
                    </Route>
                    <Route path="/items/:itemID">
                        <ItemDetailView itemList={allItems} logIn={loggedIn} user={user} setUser={setUser} />
                    </Route>
                    <Route path="/unofficial-dyes" exact>
                        <Container>
                            <AllDyesView itemList={allItems}/>
                        </Container>
                    </Route>
                    <Route path="/user/:userID" exact>
                        <UserDetails user={user} logIn={loggedIn} itemList={allItems} />
                    </Route>
                    <Route path="/portal" exact>
                        <UserRegistration/>
                    </Route>
                    <Route path="/success" exact>
                        <Success/>
                    </Route>
                    <Route path="/submit" exact>
                        <SubmitDye itemList={allItems} logIn={loggedIn} user={user}/>
                    </Route>
                </Switch>
                <Footer/>
            </>}
        </BrowserRouter>
    );
}

export default App;