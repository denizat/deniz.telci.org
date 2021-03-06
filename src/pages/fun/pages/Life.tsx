import React from "react";
import ReactDOM from "react-dom";
import "./life/index.css"
import { Life, Land } from "./life/life"

export class LifeDOM extends React.Component<{}, { land: Land, iterator: NodeJS.Timeout | undefined }> {
    life: Life
    max = 20
    iterationSpeed: number = 100
    constructor({ }) {
        super({})
        this.life = new Life(this.max)
        this.life.randomize()
        this.state = {
            land: this.life.land,
            iterator: undefined
        }
    }

    render() {
        return (
            <div className="bg-gray-900 h-screen text-white overflow-y-auto">
                <div className="bg-gray-500 p-5 w-max">{this.state.land.map(
                    (v, r) => {
                        return (<div className="flex flex-row" key={r}>{v.map(
                            (e, c) => {
                                return (<div className={`w-5 h-5 m-1 transform hover:scale-150 hover:shadow-2xl ${e ? "bg-black" : "bg-white"}`} key={c}
                                    onClick={() => {
                                        this.life.land[r][c] = this.life.land[r][c] ? 0 : 1
                                        this.setState({ land: this.life.land })
                                    }}></div>)
                            })} </div>)
                    })}</div>
                <div>
                    <button
                        onClick={() => {
                            this.life.clear()
                            this.setState({ land: this.life.land })
                        }}>Clear</button>
                    <button
                        onClick={() => {
                            this.life = new Life(this.max)
                            this.life.randomize()
                            this.setState({ land: this.life.land })
                        }}>New</button>
                    <button onClick={() => {
                        if (this.state.iterator) {
                            clearInterval(this.state.iterator)
                            this.setState({ iterator: undefined })
                        }
                        else {
                            this.setState({
                                iterator: setInterval(() => {
                                    this.life.iterate();
                                    this.setState({ land: this.life.land })
                                }, this.iterationSpeed)
                            })
                        }
                    }
                    }>{this.state.iterator ? "Stop" : "Iterate"}</button>{!this.state.iterator ? <button
                        onClick={
                            () => {
                                this.life.iterate()
                                this.setState({
                                    land: this.life.land
                                })
                            }

                        }>Step</button> : null}
                    {!this.state.iterator ? <input type="range" min="10" max="1000" defaultValue={this.iterationSpeed} onChange={e => {
                        this.iterationSpeed = parseInt(e.target.value)
                    }} /> : null}
                </div>
            </div >
        )
    }
}