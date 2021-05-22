import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css"

import Body from "./components/Body";
import Home from "./components/Home";
import Polygons from "./components/polygons/index";
import NavHeader from "./components/NavHeader";

const Loc = () => (
<div><NavHeader /></div>
)


class App extends React.Component {
  render() {
    return (
      <div  className="bg-still-water  flex flex-col h-screen overflow-hidden   text-black font-cm"> 
      <div className="backdrop-filter backdrop-grayscale  backdrop-blur-md backdrop-contrast-200">
      <div className="text-6xl  p-10">Deniz Telci</div>

      <Router >
        <Loc />
        <Switch>
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
</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
