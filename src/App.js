import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home"
import ItemDetailView from "./components/common/ItemDetailView";
import ItemListView from "./components/ItemListView";
import Footer from "./components/common/Footer";
import UserDetails from "./components/common/UserDetails";
import UserRegistration from "./components/UserRegistration";
import dummyData from "./lib/js/dummyData";
import AllDyesView from "./components/AllDyesView";
import {Container} from "react-bootstrap";

function App() {
    const [allItems, ] = React.useState(dummyData);

    return (
        <BrowserRouter>
            <Navigation home={true} />
            <Switch>
                <Route path="/" exact>
                    <Home itemList={allItems} />
                </Route>
                <Route path="/items" exact>
                    <ItemListView itemList={allItems} />
                </Route>
                <Route path="/items/:itemID">
                    <ItemDetailView itemList={allItems} />
                </Route>
                <Route path="/unofficial-dyes">
                    <Container>
                        <AllDyesView itemList={allItems} />
                    </Container>
                </Route>
                <Route path="/user/:userID">
                    <UserDetails />
                </Route>
                <Route path="/portal">
                    <UserRegistration />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;