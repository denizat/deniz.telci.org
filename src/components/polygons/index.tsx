import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <div>
      <Link to="/">Home</Link>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      sapiente aliquid blanditiis! Veritatis odio esse accusantium pariatur
      distinctio dolor quia suscipit officia tempora corrupti, fugit recusandae
      officiis, minima debitis illum.
    </p>
    <canvas
      id="poly"
      width="1000"
      height="1000"
      //   class="center"
      //   style="border: 1px solid #fff; background-color: #000"
    ></canvas>
    <form>
      <input type="radio" id="chaos" name="method" value="chaos" checked />
      <br />
      <input type="radio" id="network" name="method" value="network" />
      <br />
    </form>
    <input id="sides" type="number" value="3" />
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis
        vel, hic magnam aliquid tempore quasi. Corporis excepturi, dolor ad
        soluta, maxime sapiente libero animi saepe, ex temporibus doloremque
        blanditiis?
      </p>
      <ul>
        <li>
          <select id="r" name="r">
            <option value="2">2</option>
            <option value="serp">Serp</option>
          </select>
          <div id="serpValue"></div>
        </li>
        <li>
          <select id="technique" name="technique">
            <option value="none">None</option>
            <option value="notSame">Not Same</option>
            <option value="notRight">Not Right</option>
            <option value="notLeft">Not Left</option>
          </select>
        </li>
        <li>
          <input id="iterations" type="number" value="10000" />
        </li>
      </ul>
      <button id="draw">Draw</button>
      <button id="pause">Pause</button>
    </div>

    <ul>
      <li>
        Switch to webgl and also this:
        https://developers.google.com/web/updates/2018/08/offscreen-canvas
      </li>
      <li>
        Todo
        <ul>
          <li>Switch to React</li>
          <li>switch to webgl (pixi.js)</li>
        </ul>
      </li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt
      quaerat ipsa pariatur rerum quisquam expedita excepturi accusamus
      corrupti. Impedit magnam reprehenderit enim quaerat quae, quis esse
      ducimus ut voluptate?
    </p>
  </div>
);
