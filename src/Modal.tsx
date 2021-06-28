import React from "react";
import "tailwindcss/tailwind.css"

interface ModalProps {
    children: any
}
export class Modal extends React.Component<ModalProps, { on: boolean }>{
    constructor(props: ModalProps) {
        super(props)
        this.state = {
            on: false
        }
    }

    turn(to: boolean) {
        this.setState({ on: to })
    }

    render() {
        return (
            <div>
                {this.state.on ?
                    <div className="fixed top-1/4 lg:left-1/3  backdrop-filter backdrop-blur-2xl p-4 rounded-3xl  w-9/12 lg:w-1/3 h-1/2 border-white border-4">
                        <button className='float-right text-white' onClick={() => this.turn(false)}>[x]</button></div> : null}
                <div onClick={() => this.turn(true)}>{this.props.children}</div>

            </div>
        )
    }
}