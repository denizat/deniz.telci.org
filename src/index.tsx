import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home";
import Polygons from "./components/polygons/index";
import Header from "./components/Header";

const NavHeader = () => (
  <nav>
    <Header title="Real_Header" num={420} />
    <Link to="/">Home</Link>
    <br />
    <Link to="/body">Body</Link>
    <br />
    <Link to="/polygons">Polygons</Link>
    <br />
    <Link to="/practical_react_with_ben_awad">
      Practical React with Ben Awad
    </Link>
    <br />

    <hr />
  </nav>
);

const PracticalReact = () => {
  let match = useRouteMatch();
  let base = match.url;
  return (
    <div>
      <nav>
        <Link to={match.url + "/state"}>State</Link>
      </nav>
      <Switch>
        <Route path={base + "/state"}>
          <p>INSTATE</p>
        </Route>
      </Switch>
    </div>
  );
};

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
