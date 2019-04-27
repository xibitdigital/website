import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import { NoMatch } from "./components";

const Routes: React.SFC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={() => <div>Not Found</div>} />
  </Switch>
);

export default Routes;
