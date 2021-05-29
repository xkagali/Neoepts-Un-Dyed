import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Home from "./components/Home"
import {Container} from "react-bootstrap";
import ItemDetailView from "./components/common/ItemDetailView";
import ItemListView from "./components/ItemListView";
import Footer from "./components/common/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/items" exact>
                    <ItemListView />
                </Route>
                <Route path="/items/:itemID">
                    <ItemDetailView />
                </Route>
                <Route path="/unofficial-dyes">
                    <ItemListView />
                </Route>
                <Route path="/user/:userID">

                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;