import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home";
import Polygons from "./components/polygons/index";
import NavHeader from "./components/NavHeader";
import PracticalReact from "./components/practicalReact/PracticalReact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavHeader />
        <Switch>
          <Route path="/practical_react_with_ben_awad">
            <PracticalReact />
          </Route>
          <Route path="/polygons">
            <Polygons />
          </Route>
          <Route path="/body">
            <Body />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
