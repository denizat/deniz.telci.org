import React, { useEffect, useRef } from "react"
import "tailwindcss/tailwind.css"
import "./canvas.css"

import PolygonMath from "./polygon/utils/math"
import ControlBox from "./polygon/ControlBox"


/**
 * Plans:
 * Start off with a random fractal generating on component load so that we grab the users attention
 */

export default () => {

    const canvasRef = React.createRef<HTMLCanvasElement>()
    // const canvasRef = useRef(null)
    let min = screen.width > screen.height ? screen.height : screen.width
    min *= 0.8

    return (
        <div className=" p-10 w-max  backdrop-filter backdrop-blur-xl ">
            <canvas
                ref={canvasRef}
                width={min}
                height={min}
                // width="1000"
                // height="1000"
                className="canvas bg-black"
            ></canvas>
            <ControlBox canvasRef={canvasRef} />
        </div>
    )
}