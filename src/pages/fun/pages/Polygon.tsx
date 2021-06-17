import React, { useEffect, useRef } from "react"
import "tailwindcss/tailwind.css"
import "./canvas.css"

import PolygonMath from "./polygon/utils/math"


/**
 * Plans:
 * Start off with a random fractal generating on component load so that we grab the users attention
 */

export default () => {

    const canvasRef = useRef(null)
    useEffect(() => {
        ///////////////////////////////////// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
        const p = new PolygonMath(canvasRef)

        p.drawChaosFrac(p.polygon(5, p.center.x, p.center.x, p.center.y), 100000)
    })



    return (
        <canvas
            ref={canvasRef}
            width="1000"
            height="1000"
            className="canvas"
        ></canvas>
    )
}