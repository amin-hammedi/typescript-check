import React, { Component } from "react";

// define the state structure for the Counter component using an interface
// the count is a number
interface CounterState {
  count: number;
}

// the Counter class component to TypeScript by extending Component with types for Props and State
// this component does not use props, we pass an empty object for the Props type
class Counter extends Component<{}, CounterState> {
  // the state is now strongly typed with the CounterState interface
  state: CounterState = {
    count: 0,
  };

  // define the increment method with arrow function syntax usin 'this'
  increment = () => {
    // update the state using setState
    this.setState({ count: this.state.count + 1 });
  };

  // render method to output the JSX
  render() {
    // return the JSX with a paragraph showing the current count and a button to increment it
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export the Counter component as a default export
export default Counter;
