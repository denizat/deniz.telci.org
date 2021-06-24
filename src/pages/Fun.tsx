import React from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import "tailwindcss/tailwind.css"

import Polygon from "./fun/pages/Polygon"
import Sort from "./fun/pages/Sort"

type funParams = {
    funThing: string
}


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

const Data = () => {
    let { funThing } = useParams<funParams>()
    let { path, url } = useRouteMatch()
    return (
        <div>
            <div>This is the fun thing: {things[funThing]()}</div>
            <div>Also here is the path: {path}</div>
        </div>
    )
}

const capFirst = (word: string): string => {
    return (word[0].toUpperCase() + word.slice(1))
}


export default () => {

    let { path, url } = useRouteMatch()
    return (
        < div className="text-lg" >
            <Link to="/" className="text-2xl  p-10">Home</Link>


            <div>
                <h1>Predata</h1>
                <div>Also here is the path: {path}</div>
                <div>Also here is the url: {url}</div>
            </div>

            <div className="container m-2">
                <h1>Here is some fun stuff:</h1>
                <ul className="list-disc mx-5">
                    {
                        Object.keys(things).map((aKey, i) => {
                            return (
                                <li key={i}><Link to={`${url}/${aKey}`}>{capFirst(aKey)}</Link></li>
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
