import * as React from "react";

import Hello from "./Hello";
import LightBub from "./LightBub";
import ToggleButton from "./ToggleButton";


declare module "react" {
  /**
   * State hook. Returns a stateful value, and a function to update it.
   */
  export function useState<TValue>(
    initialState: TValue
  ): [TValue, (value: TValue) => void];

  /**
   * Accepts a function that contains imperative, possibly effectful code.
   */
  export function useEffect(didUpdate: () => void | (() => void)): void;
}

const styles: React.CSSProperties = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  const [count, setCount] = React.useState(0);
 
  console.log(count)

  return (
    <div style={styles}>
      <Hello name="Presentation" />
      <h2>React Typescript - Hook {"\u2728"}</h2>
      <h3>
        Count: {count}{" "}
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </h3>
      <ToggleButton/>
      <LightBub/>
    </div>
  );
};

export default App