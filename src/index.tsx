import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "tailwindcss/tailwind.css"

import Body from "./components/Body";
import Home from "./components/Home";
import Polygons from "./components/polygons/index";
import NavHeader from "./components/NavHeader";
import PracticalReact from "./components/practicalReact/PracticalReact";
import "./components/image.css"

class App extends React.Component {
  render() {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-gray-900 text-purple-300 image">
      <Router >
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
</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
