import React from "react";
import GlobalState from "./components/context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./components/Browse";
import Home from "./components/Home";
import Adress from "./components/Adress";
import Block from "./components/Block";
import BlockData from "./components/BlockData";
import PageNotFound from "./components/PageNotFound";
import "./App.scss";

function App() {
  return (
    <GlobalState>
      <div>
        <Router>
          <Browse />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Adress" component={Adress}></Route>
            <Route path="/Block" component={Block}></Route>
            <Route path="/BlockData" component={BlockData}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </Router>
      </div>
    </GlobalState>
  );
}

export default App;
