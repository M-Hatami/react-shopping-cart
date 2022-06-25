import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDelete, onReset, counters } = this.props; // destructuring instead of repeat typing this.props.<method>
    return (
      <>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          بازنشانی
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

export default Counters;
