import React, { useEffect, useRef } from "react"
import "tailwindcss/tailwind.css"
import "./polygon/canvas.css"

import PolygonMath from "./polygon/utils/math"
import ControlBox from "./polygon/ControlBox"


/**
 * Plans:
 * Start off with a random fractal generating on component load so that we grab the users attention
 */

// Try this https://stackoverflow.com/questions/56640380/how-can-i-make-sure-a-react-parent-component-loads-data-before-its-child-compone


// export default () => {

//     const canvasRef = React.createRef<HTMLCanvasElement>()
//     let min = screen.width > screen.height ? screen.height : screen.width
//     min *= .8


//     console.log(canvasRef);



//     return (
//         <div className=" p-10 w-max  backdrop-filter backdrop-blur-xl ">
//             <canvas
//                 ref={canvasRef}
//                 width={min}
//                 height={min}
//                 // width="1000"
//                 // height="1000"
//                 className="canvas bg-black"
//             ></canvas>
//             {canvasRef.current ? <ControlBox canvasRef={canvasRef} /> : null}
//         </div>
//     )
// }

export default class Polygons extends React.Component<{}, { canvasRef: React.RefObject<HTMLCanvasElement>, min: number }>{

    constructor(props: any) {
        super(props)
        this.state = {
            min: (screen.width > screen.height ? screen.height : screen.width) * .8,
            canvasRef: null
        }
    }
    async componentDidMount() {
        await this.setState({ canvasRef: React.createRef<HTMLCanvasElement>() })
        this.forceUpdate()
    }



    render() {
        return (
            <div className=" p-10 w-max  backdrop-filter backdrop-blur-xl " >
                <canvas
                    ref={this.state.canvasRef}
                    width={this.state.min}
                    height={this.state.min}
                    // width="1000"
                    // height="1000"
                    className="canvas bg-black"
                ></canvas>
                {this.state.canvasRef?.current && <ControlBox canvasRef={this.state.canvasRef} />}
            </div >
        )
    }
}