import React, { useReducer } from "react";

const intialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1
      };
    case "MINUS":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: intialState.count
      };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
