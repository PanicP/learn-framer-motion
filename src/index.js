import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import { BasicAnimate } from "./components/BasicAnimate";
import { Refresh } from "./components/Refresh";
import { history } from "./history";

import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Router history={history}>
        <>
          <Refresh onClick={() => setCount(count + 1)} />
          <Switch>
            <Route
              path="/basic-animate"
              exact
              render={() => <BasicAnimate key={`basic-animate-${count}`} />}
            />
            <Route path="/" component={() => <div>this is fallback</div>} />
          </Switch>
        </>
      </Router>
    </>
  );
};

render(<App />, document.getElementById("root"));
