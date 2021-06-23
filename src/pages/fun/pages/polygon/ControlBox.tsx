import React, { useEffect, useState } from "react";
import { render } from "react-dom";
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
    constructor(props: BoxProp) {
        super(props)
        this.state = {
            drawing: undefined
        }
        this.p = new PolygonMath(props.canvasRef)
        this.technique = this.p.techniques.random
    }


    handleClick = () => {
        if (this.state.drawing) {
            clearInterval(this.state.drawing)
            this.setState({ drawing: undefined })
        } else {

            this.setState({
                drawing: setInterval(() => {
                    let p = this.p
                    p.drawChaosFrac(p.polygon(3, p.min, p.center.x, p.center.y), 5000, this.technique, null)
                }, 300)
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
                <Techniques math={this.p} handler={this.handleTech.bind(this)} />
            </div>
        )
    }


}