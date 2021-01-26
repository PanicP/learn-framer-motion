import * as React from "react";
import { useState } from "react";
import { render } from "react-dom"
import { BasicAnimate } from "./components/BasicAnimate"
import { Refresh } from "./components/Refresh"


import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <BasicAnimate key={count} />
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));