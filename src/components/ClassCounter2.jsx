import React from "react";

class ClassCounter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.descrement = this.descrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  descrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.descrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter2;
