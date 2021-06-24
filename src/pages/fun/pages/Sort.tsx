import React from "react"
import "tailwindcss/tailwind.css"

let min = (screen.width > screen.height ? screen.height : screen.width) * .8

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Boxes extends React.Component<{}, { arr: number[] }> {
    max: number = 100
    constructor() {
        super(null)
        let arr = []
        for (let i = 0; i < this.max; i++) {
            arr.push(Math.floor(Math.random() * this.max))
        }
        this.state = {
            arr: arr
        }
    }

    denizSortFast() {
        let count;
        let arr = this.state.arr
        while (count != arr.length) {
            count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                } else {
                    count += 1;
                }
            }
        }
        this.setState({ arr: arr })
    }

    async denizSort() {
        let count;
        let arr = this.state.arr
        while (count != arr.length) {
            count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    this.setState({ arr: arr })
                    await sleep(0)
                } else {
                    count += 1;
                }

            }
        }
    }

    once: boolean
    componentDidMount() {
        if (!this.once) {
            setTimeout(() => {
                this.denizSort()
            }, 1000);
            this.once = true
        }
    }

    render() {
        return <div className="flex flex-row">{
            this.state.arr.map(v => {
                let size = min * (1 / this.max)
                return (<div style={{ height: v * size, width: size }} className="bg-gray-900"></div>)
            })
        }</div>
    }

}
export default () => {
    return (
        <div className="flex flex-col" style={{ height: min }}>INHERE
            <Boxes />
        </div>
    )

}