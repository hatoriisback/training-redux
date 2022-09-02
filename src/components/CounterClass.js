// * Import Libraries
import React, { Component } from "react";
// * Import connect as connector class component to store
import { connect } from "react-redux";

// * Import Reducer
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/features/counter/counterSlice";

class CounterClass extends Component {
  state = {
    incrementAmount: 0,
  };

  // * Buat state dan method setIncrementAmount
  setincrementAmount = (val) => {
    this.setState({
      incrementAmount: Number(val) || 0,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="demo">
          <h1>[REDUX | Class Component] - Counter</h1>
          <h1>{this.props.localCount}</h1>
          <button onClick={() => this.props.dispatch(decrement())}>
            -
          </button>{" "}
          <button onClick={() => this.props.dispatch(increment())}>+</button>{" "}
          <input
            type="text"
            value={this.state.incrementAmount}
            onChange={(e) => this.setincrementAmount(e.target.value)}
          ></input>
          <button
            id="increment"
            onClick={() =>
              this.props.dispatch(incrementByAmount(this.state.incrementAmount))
            }
          >
            Add Amount
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  localCount: state.counter.count,
});

export default connect(mapStateToProps)(CounterClass);
