import React from "react"
import "tailwindcss/tailwind.css"

let min = (screen.width > screen.height ? screen.height : screen.width) * .8

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Boxes extends React.Component<{}, { arr: number[] }> {
    max: number = 10
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


    async denizSort() {
        let count;
        let arr = this.state.arr
        while (count != arr.length) {
            count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    this.setState({ arr: arr })
                    await sleep(1)
                } else {
                    count += 1;
                }

            }
        }
    }

    once: boolean
    componentDidMount() {
        if (!this.once) {
            this.denizSort()
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

class Test extends React.Component {
    ref: React.RefObject<HTMLDivElement>
    solve: Function
    box = document.createElement("div")
    max = 100
    arr: number[] = []
    constructor() {
        super(null)
        this.ref = React.createRef<HTMLDivElement>()

        for (let i = 0; i < this.max; i++) {
            this.arr.push(i)

        }
        this.arr.map((v, i, a) => {
            let rand = Math.floor(Math.random() * this.max)
            let tmp = a[rand]
            a[rand] = v
            a[i] = tmp

        })

        this.box.className = "flex flex-row"

        this.arr.map(v => {

            let bar = document.createElement("div")
            let size = min * (1 / this.max)
            // bar.style.height = "300px"
            bar.style.height = (v * size).toString() + "px"
            bar.style.width = size.toString() + "px"
            bar.id = v.toString()
            // console.log(bar.style.height);

            bar.className = "bg-gray-900"

            this.box.appendChild(bar)
        })

    }


    async denizSort() {
        let count;
        let arr = this.arr
        while (count != arr.length) {
            count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

                    let small = this.box.childNodes.item(i)
                    let holdSmall = small.cloneNode()
                    let big = this.box.childNodes.item(i + 1)
                    let holdBig = big.cloneNode()
                    this.box.replaceChild(holdBig, small)
                    this.box.replaceChild(holdSmall, big)
                    await sleep(0)

                } else {
                    count += 1;
                }

            }
        }
    }

    didWeSort: boolean = false
    componentDidMount() {
        this.ref.current.appendChild(this.box)
        if (!this.didWeSort) {
            this.denizSort()
            this.didWeSort = true
        }
    }

    render() {
        return <div ref={this.ref}></div>
    }
}

export default () => {
    return (
        <div className="flex flex-col" style={{ height: min }}>
            <Test />
        </div>
    )

}