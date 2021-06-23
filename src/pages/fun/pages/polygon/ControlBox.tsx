import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "tailwindcss/tailwind.css"
import PolygonMath from "./utils/math";

interface BoxProp {
    canvasRef: React.RefObject<HTMLCanvasElement>
}
interface BoxState {
    p: PolygonMath
    drawing: ReturnType<typeof setTimeout>;
}


const Techniques: React.FC<{ math: PolygonMath, handler: any }> = ({ math, handler }) => {
    return (
        <ul className="mx-7 list-decimal">
            {
                Object.keys(math.techniques).map((v, i) => {
                    return (<li key={i} onClick={() => handler(v)}>{v}</li>)
                })
            }
        </ul >
    )
}


export default class ControlBox extends React.Component<BoxProp, BoxState> {
    technique: any
    constructor(props: BoxProp) {
        super(props)
        this.state = {
            p: new PolygonMath(this.props.canvasRef),
            drawing: undefined
        }
    }


    handleClick = () => {
        if (this.state.drawing) {
            clearInterval(this.state.drawing)
            this.setState({ drawing: undefined })
        } else {

            this.setState({
                drawing: setInterval(() => {
                    let p = this.state.p
                    p.drawChaosFrac(p.polygon(3, p.min, p.center.x, p.center.y), 1000, null, null)
                }, 300)
            })

        }
    }
    handleTech(t: any) {
        this.technique = t

    }
    clear = () => {
        this.state.p.clear()
        console.log(this.technique);

    }

    render() {
        return (
            <div className="bg-purple-500">
                A box with text
                <button className="bg-green-700 border-4 border-red-500" onClick={this.handleClick}>{this.state.drawing ? "Pause" : "Start"}</button>
                <button className="bg-green-700" onClick={this.clear}>Clear</button>
                <Techniques math={this.state.p} handler={this.handleTech.bind(this)} />
            </div>
        )
    }


}