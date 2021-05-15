import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "tailwindcss/tailwind.css"

// const linkCSS = "padding"

export default () => (
  <nav className='flex flex-row'>
    <Header title="Real_Header" num={420} />
    <Link to="/">Home</Link>
    <br />
    <Link to="/body">Body</Link>
    <br />
    <Link to="/polygons">Polygons</Link>
    <br />
    <Link  to="/practical_react_with_ben_awad">
      Practical React with Ben Awad
    </Link>
    <br />

    <hr />
  </nav>
);
