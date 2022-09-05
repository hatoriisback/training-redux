// * Import Hooks dari Komponen React
import React, { useState } from "react";

// * Import Hooks Redux Toolkit
import { useSelector, useDispatch } from "react-redux";

// * Import variables dari counterSlice
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/features/counter/counterSlice";

const CounterFn = () => {
  // * 2. Implementasi hooks

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // * 3. Gunakan useState untuk incrementAmount
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  return (
    <div id="demo">
      <h1>[REDUX | Function Component] - Counter</h1>
      <div id="counter">{count}</div>
      <button id="decrement" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button id="increment" onClick={() => dispatch(increment())}>
        +
      </button>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button
        id="increment"
        onClick={() => dispatch(incrementByAmount(addValue))}
      >
        Add Amount
      </button>
    </div>
  );
};

export default CounterFn;
