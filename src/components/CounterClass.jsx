import { Component } from "react";

class CounterClass extends Component {
  state = {
    counter: 0
  };

  inCrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrementCrementCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => this.inCrementCounter}
          className="counter-button"
        >
          +
        </button>
        <span className="counter"> {this.state.counter} </span>
        <button
          onClick={() => this.decrementCrementCounter}
          className="counter-button"
        >
          -
        </button>
      </div>
    );
  }
}

export default CounterClass;
