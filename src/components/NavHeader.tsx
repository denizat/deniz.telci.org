import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "tailwindcss/tailwind.css"

const linkCSS = "py-1 px-2 border border-purple-700"

export default () => (
  <nav className='flex flex-row'>
    <Header title="Real_Header" num={420} />
    <Link className={linkCSS} to="/">Home</Link>
    <br />
    <Link className={linkCSS}to="/body">Body</Link>
    <br />
    <Link className={linkCSS}to="/polygons">Polygons</Link>
    <br />
    <Link  className={linkCSS}to="/practical_react_with_ben_awad">
      Practical React with Ben Awad
    </Link>
    <br />

    <hr />
  </nav>
);
