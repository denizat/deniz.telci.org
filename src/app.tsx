import React from "react";

import Body from "./components/Body";
import { Header } from "./components/Header";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="hello" num={1} />
        <Body />
      </div>
    );
  }
}

export default App;
