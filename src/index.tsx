import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css"

import { Link } from "react-router-dom";
import "./image.css"

class App extends React.Component {
  render() {
    return (
      <div  className="bg-still-water  flex flex-col h-screen overflow-hidden   text-black font-rob"> 
      {/* <div  className="bg-still-water  flex flex-col h-screen overflow-hidden   text-black font-cm">  */}
      <div className="backdrop-filter backdrop-grayscale  backdrop-blur-md backdrop-contrast-200">
      <div className="text-6xl  p-10">Deniz Telci</div>

      <Router >
        <Switch>
          <Route path="/polygons">
          </Route>
          <Route path="/body">
          </Route>
          <Route path="/">

  <div className="items-center text-4xl ">
    <h1>Deniz Telci</h1>
    <figure className="items-center">
      {/* <img  className="image self-center" src={transme} title="Made by some gimp error, I think." /> */}
      <figcaption>"Very handsome" - My Mom</figcaption>
    </figure>


    <h2>Contact</h2>
    <ul>
      <li>
        Email: <a href="mailto:deniz@telci.org">deniz@telci.org</a>
      </li>
      <li>
        GitHub: <a href="https://github.com/denizat">denizat</a>
     </li>
    </ul>
    <h2>Fun Stuff</h2>
    <ul>
      <li>
        <Link to="/body">Body</Link>
      </li>
      <li>
        <Link to="/polygons">Polygons</Link>
      </li>
    </ul>
  </div>
          </Route>
        </Switch>
      </Router>
      </div>
</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
