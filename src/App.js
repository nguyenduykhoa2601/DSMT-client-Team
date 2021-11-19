import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Edit from "./pages/Edit";
import Detection from "./pages/Detection";
import NotFound from "./pages/NotFound"
import Home from "./pages/index";
import Swap from "./pages/Swap";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/edit" exact component={Edit}/>
                    <Route path="/detect" exact component={Detection} />
                    <Route path="/swap" exact component={Swap} />
                    <Route path="*" exact component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
