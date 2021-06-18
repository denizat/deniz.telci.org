import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "tailwindcss/tailwind.css"
import "./image.css"
import "./fonts/cms/cmun-serif.css"

import Fun from "./pages/Fun"

class App extends React.Component {
  render() {
    return (
      <div className="bg-still-water bg-cover  flex flex-col  overflow-auto   text-black font-cm  ">
        <div className="text-6xl  p-10">Deniz Telci</div>

        <Router >
          <Switch>
            <Route exact path="/">
              <div className="items-center text-3xl ">
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
                <div className="container mx-auto m-4">
                  <h2 className="text-4xl underline hover:bg-pink-700 w-max">Fun Stuff</h2>
                  <ul className="list-disc">
                    <li>
                      <Link to="/fun" >Fun</Link>
                    </li>
                    <li>
                      <Link to="/art" >Art</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Route>
            <Route path="/art">
            </Route>
            <Route path="/fun">
              <Fun />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
