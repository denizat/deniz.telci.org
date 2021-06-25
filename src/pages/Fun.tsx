import React from "react"
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom"
import "tailwindcss/tailwind.css"

import Polygon from "./fun/pages/Polygon"
import Sort from "./fun/pages/Sort"


interface obj {
    [String: string]: () => JSX.Element
}
const things: obj = {
    polygons: () => (
        <Polygon />
    ),
    sort: () => (
        <Sort />
    )
}
type funParams = {
    funThing: string
}
const Data = () => {
    let { funThing } = useParams<funParams>()

    return (
        things[funThing]()
    )
}

const capFirst = (word: string): string => {
    return (word[0].toUpperCase() + word.slice(1))
}


export default () => {

    let { url } = useRouteMatch()

    return (
        < div className="text-lg" >
            <Link to="/" className="text-4xl m-10">Home</Link>

            <div className="container m-2">
                <h1>Here is some fun stuff:</h1>
                <ul className="list-disc mx-5">
                    {
                        Object.keys(things).map((aKey, i) => {
                            let loc = useLocation().pathname
                            return (
                                <Link to={`${url}/${aKey}`} className={loc === url + "/" + aKey ? "text-red-700" : ""} ><li key={i}>{capFirst(aKey)}</li></Link>
                            )
                        })
                    }
                </ul>
            </div>

            <Switch>
                <Route exact path="/fun">
                    <div>Please select a fun thing</div>
                </Route>
                <Route path={`/fun/:funThing`}>
                    <Data />
                </Route>

            </Switch>

        </div >
    )
}
