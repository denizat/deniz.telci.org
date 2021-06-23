import React from "react";
import "tailwindcss/tailwind.css"
import PolygonMath, { Techniques } from "./utils/math";

interface BoxProp {
    canvasRef: React.RefObject<HTMLCanvasElement>
}
interface BoxState {
    drawing: ReturnType<typeof setTimeout>;
}


const Techniques: React.FC<{ math: PolygonMath, handler: Function }> = ({ math, handler }) => {
    return (
        <div className="border-4 mx-7   border-gray-900">
            <h3 className="text-3xl">Techniques:</h3>
            <ul className=" mx-7 list-decimal  ">
                {
                    Object.keys(math.techniques).map((v, i) => {
                        return (<li key={i} onClick={() => handler(math.techniques[v])}>{v}</li>)
                    })
                }
            </ul >
        </div>
    )
}


export default class ControlBox extends React.Component<BoxProp, BoxState> {
    technique: Function
    p: PolygonMath
    sides: number
    constructor(props: BoxProp) {
        super(props)
        this.state = {
            drawing: undefined
        }
        this.p = new PolygonMath(props.canvasRef)
        this.technique = this.p.techniques.random
        this.sides = 3 // Default to Serpinski triangle
    }


    handleClick = () => {
        if (this.state.drawing) {
            clearInterval(this.state.drawing)
            this.setState({ drawing: undefined })
        } else {

            this.setState({
                drawing: setInterval(() => {
                    let p = this.p
                    p.drawChaosFrac(p.polygon(this.sides, p.min, p.center.x, p.center.y), 1000, this.technique, null)
                }, 100)
            })

        }
    }
    handleTech(t: Function) {
        this.technique = t

    }
    clear = () => {
        this.p.clear()
    }

    render() {
        return (
            <div className="bg-purple-500">
                <button className="bg-green-700 border-4 border-red-500" onClick={this.handleClick}>{this.state.drawing ? "Pause" : "Start"}</button>
                <button className="bg-green-700" onClick={this.clear}>Clear</button>
                <input className="mx-3" type="range" defaultValue={3} min={1} max={10} onChange={(e) => {
                    this.sides = parseInt(e.target.value)
                    this.clear()

                }} />
                <Techniques math={this.p} handler={this.handleTech.bind(this)} />
            </div>
        )
    }


}