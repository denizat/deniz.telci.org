import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "tailwindcss/tailwind.css"
import "./index.css"
import "./fonts/cms/cmun-serif.css"
import Img from "./images/pic.png"

import Fun from "./pages/Fun"
import { Experience } from "./pages/Experience"
import { Projects } from "./pages/Projects"
import { Modal } from "./Modal"


class App extends React.Component<{}, { imageClicked: Boolean }> {
  constructor({ }) {
    super(null)
    this.state = {
      imageClicked: false
    }


  }

  render() {
    return (
      <div className=" flex flex-col items-center  font-cm overflow-auto h-screen bg-ocean bg-cover text-white text-xl">
        <div className="mx-4">
          <Router>
            <Switch>
              <Route exact path="/">
                <div className="items-center">
                  <div className="text-6xl p-10 text-center">Deniz Telci</div>
                  <div className="flex flex-col">
                    <h2 className="text-3xl self-center">Contact</h2>
                    <ul>
                      <li>
                        Email: <a href="mailto:deniz@telci.org">deniz@telci.org</a>
                      </li>
                      <li>
                        GitHub: <a href="https://github.com/denizat">denizat</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col mx-auto m-4">
                    <Modal><button className="bg-blue-800 rounded-lg px-2 py-1">Login</button></Modal>
                    <div className="cursor-pointer underline hover:text-blue-700" onClick={() => this.setState({ imageClicked: !this.state.imageClicked })}>{this.state.imageClicked ? <img src={Img}></img> : "Image of Me"}</div>
                    <Link to="/fun" >Fun</Link>
                    <Link to="/experience" >Experience</Link>
                    <Link to="/projects" >Projects</Link>
                  </div>
                </div>
              </Route>
              <Route path="/fun">
                <Fun />
              </Route>
              {/* <Route path="/interests">
                <Interests />
              </Route> */}
              {/* <Route path="/education">
                <Education />
              </Route> */}
              {/* <Route path="/skills">
                <Skills />
              </Route> */}
              {/* <Route path="/resume">
                <Resume />
              </Route> */}
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
