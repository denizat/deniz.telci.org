import React from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import "tailwindcss/tailwind.css"

export default () => {
    let { path, url } = useRouteMatch()

    return (
        < div >
            <Link to="/" className="text-2xl  p-10">Home</Link>

            <div>Here is some fun stuff:</div>
            <div>Also here is the path: {path}</div>
            <div>Also here is the url: {url}</div>

            <ul>
                <li><Link to={`${url}/polygons`}>Polygons</Link></li>
                <li><Link to={`${url}/sort`}>Sort</Link></li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <div>Please select a fun thing</div>
                </Route>
                <Route path={`${path}/:funThing`}>
                    <div>Please select a fun thing</div>
                </Route>

            </Switch>

        </div >
    )
}

// const funView = () => {
//     let { funThing } = useParams()
//     return ()
// }