import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
export default () => {
  let match = useRouteMatch();
  let base = match.url;
  return (
    <div>
      <nav>
        <Link to={match.url + "/state"}>State</Link>
        <Link to={match.url + "/conditionalRendering"}>
          Conditional Rendering
        </Link>
        <Link to={match.url + "/form"}>Form</Link>
      </nav>
      <Switch>
        <Route path={base + "/state"}>
          <p>INSTATE</p>
        </Route>
        <Route path={base + "/conditionalRendering"}>
          <p>ConditionalRendering</p>
        </Route>
        <Route path={base + "/form"}>
          <p>In form</p>
        </Route>
      </Switch>
    </div>
  );
};
