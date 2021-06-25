import React from "react"
import "tailwindcss/tailwind.css"

let min = (screen.width > screen.height ? screen.height : screen.width) * .5

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class WithReact extends React.Component<{}, { arr: number[], eleArr: { ele: JSX.Element, val: number }[] }> {
    max: number = 100
    constructor(props: null = null) {
        super(props)
        let arr = []
        for (let i = 0; i < this.max; i++) {
            // arr.push(Math.floor(Math.random() * this.max))
            arr.push(this.max - i)
        }
        // arr.map((v, i, a) => {
        //     let rand = Math.floor(Math.random() * this.max)
        //     let tmp = a[rand]
        //     a[rand] = v
        //     a[i] = tmp

        // })
        let eleArr = arr.map((v) => {
            let size = min * (1 / this.max)
            return ({ ele: <div style={{ height: v * size, width: size }} className="bg-gray-900"></div>, val: v })
        }
        )
        this.state = {
            arr: arr,
            eleArr: eleArr
        }
    }


    async denizSort() {
        let count;
        // let arr = this.state.eleArr.map((v) => v)
        let arr = this.state.eleArr
        console.log('here');

        while (count != arr.length) {
            count = 0;
            for (let i = 0; i < arr.length; i++) {
                let size = min * (1 / this.max)
                if (arr[i].val > arr[i + 1]?.val) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    arr[i].ele = <div style={{ height: arr[i].val * size, width: size }} className="bg-red-700"></div>
                    arr[i + 1] ? arr[i + 1].ele = <div style={{ height: arr[i + 1].val * size, width: size }} className="bg-red-700"></div> : null

                    this.setState({ eleArr: arr })
                    await sleep(1)
                } else {
                    count += 1;
                }

                arr[i].ele = <div style={{ height: arr[i].val * size, width: size }} className="bg-gray-900"></div>
                arr[i + 1] ? arr[i + 1].ele = <div style={{ height: arr[i + 1].val * size, width: size }} className="bg-gray-900"></div> : null
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
            this.state.eleArr.map(v => {
                return v.ele
            })
            // this.state.arr.map(v => {
            //     let size = min * (1 / this.max)
            //     return (<div style={{ height: v * size, width: size }} className="bg-gray-900"></div>)
            // })
        }</div>
    }

}

class ByHand extends React.Component {
    ref: React.RefObject<HTMLDivElement>
    solve: Function
    box = document.createElement("div")
    max = 100
    arr: number[] = []
    constructor(props: null = null) {
        super(props)
        this.ref = React.createRef<HTMLDivElement>()

        for (let i = 0; i < this.max; i++) {
            this.arr.push(this.max - i)

        }
        // this.arr.map((v, i, a) => {
        //     let rand = Math.floor(Math.random() * this.max)
        //     let tmp = a[rand]
        //     a[rand] = v
        //     a[i] = tmp

        // })

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

                    let out = this.box.children.item(i).outerHTML
                    this.box.children.item(i).outerHTML = out.replace("bg-gray-900", "bg-red-700")
                    let small = this.box.childNodes.item(i)
                    let holdSmall = small.cloneNode()

                    out = this.box.children.item(i + 1).outerHTML
                    this.box.children.item(i + 1).outerHTML = out.replace("bg-gray-900", "bg-red-700")
                    let big = this.box.childNodes.item(i + 1)
                    let holdBig = big.cloneNode()
                    this.box.replaceChild(holdBig, small)
                    this.box.replaceChild(holdSmall, big)
                    await sleep(10)

                } else {
                    count += 1;
                }
                let out = this.box.children.item(i).outerHTML
                this.box.children.item(i).outerHTML = out.replace("bg-red-700", "bg-gray-900")

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
        return <div ref={this.ref} style={{ transform: "scaleY(-1)" }}></div>
    }
}

export default () => {
    return (
        <div className="flex flex-col" style={{ height: min }}>
            <ByHand />
            <WithReact />
        </div>
    )

}