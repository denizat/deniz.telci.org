import React from "react";
import { Link } from "react-router-dom";
import me from "../../media/pic.png";
import "tailwindcss/tailwind.css"
import "./image.css"

export default () => (
  <div className="bg-gray-800">
    <h1>Deniz Telci</h1>
    <figure>
      <img  className="image" src={me} title="Made by some gimp error, I think." />
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
);
