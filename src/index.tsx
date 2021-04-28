import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home";
import Polygons from "./components/polygons/index";

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <br />
    <Link to="/body">Body</Link>
    <br />
    <Link to="/polygons">Polygons</Link>
    <br />
    <hr />
  </nav>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
