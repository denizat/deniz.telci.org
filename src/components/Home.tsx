import React from "react";
import { Link } from "react-router-dom";
import me from "../../media/pic.png";
import transme from "../../media/transparent.png";
import "tailwindcss/tailwind.css"
import "./image.css"

export default () => (
  <div className="items-center text-4xl ">
    <h1>Deniz Telci</h1>
    <figure className="items-center">
      <img  className="image self-center" src={transme} title="Made by some gimp error, I think." />
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
