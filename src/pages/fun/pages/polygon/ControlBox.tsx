import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css"
import PolygonMath from "./utils/math";

interface BoxProp {
    canvasRef: React.RefObject<HTMLCanvasElement>
}

export default (prop: BoxProp) => {


    useEffect(() => {
        ///////////////////////////////////// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
        const p = new PolygonMath(prop.canvasRef)
        // p.drawChaosFrac(p.polygon(Math.random() * 3 + 3, p.min, p.center.x, p.center.y), 100000)
        let pg = p.polygon(Math.sqrt(25), p.min, p.center.x, p.center.y)
        pg[4] = { x: pg[4].x + 500, y: pg[4].y + 100 }
        p.drawChaosFrac(pg, 100000)
        // p.drawChaosFrac(p.polygon(Math.floor(Math.random() * 3) + 3, p.min, p.center.x, p.center.y), 100000)

    })
    return (
        <div className="bg-purple-500">
            A box with text
        </div>
    )
}

type MyState = {
    count: number
}

// export default class ControlBox extends React.Component<BoxProp, MyState> {
//     state: MyState = {
//         count: 0
//     }
//     constructor() {
//         super(null)

//     }
//     handleClick() {
//         this.state.count = Math.random() * 3

//         const p = new PolygonMath(this.props.canvasRef)
//         p.drawChaosFrac(p.polygon(this.state.count, p.min, p.center.x, p.center.y), 100000)
//     }


//     render() {
//         return (
//             <div className="bg-purple-500">
//                 A box with text
//                 <button className="bg-green-700" onClick={this.handleClick}>Click me</button>
//             </div>
//         )
//     }
// }