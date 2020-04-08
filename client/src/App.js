import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Saved from "./pages/Saved.js";
import NoMatch from "./pages/NoMatch.js";
import NavigationBar from "./components/Navbar/navbar";
import GoogleJumbo from "./components/Jumbotron/jumbotron";

function App() {
    return (
        <Router>
            <div>
                <NavigationBar />
                <GoogleJumbo />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/saved" component={Saved} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
