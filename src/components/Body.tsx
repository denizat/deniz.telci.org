import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css"

export default () => (
  <div>
    <h1>Welcome to my site</h1>
    <Link to="/">Home</Link>

    <div className="bg-green-300">Heloooooooo
    <div className="mix-blend-difference bg-white">Other thing</div>
    </div>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ullam
      repellat eaque, dolore quas hic eum labore vel inventore! Iste quam
      recusandae facere atque quis repellendus, autem consectetur beatae
      doloribus!
    </p>
  </div>
);
