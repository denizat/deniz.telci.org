import React from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import "tailwindcss/tailwind.css"

type funParams = {
    funThing: string
}

const Data = () => {
    let { funThing } = useParams<funParams>()
    let { path, url } = useRouteMatch()
    return (
        <div>
            <div>This is the fun thing: {funThing}</div>
            <div>Also here is the path: {path}</div>
        </div>
    )
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
                    <li><Link to={`${url}/polygons`}>Polygons</Link></li>
                    <li><Link to={`${url}/sort`}>Sort</Link></li>
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
