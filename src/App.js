import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="App">
      {/* <NewCounter/> */}
        {/* <div data-test="display-box" className="box" />
        <div data-test="display-box" className="box" />
        <div data-test="display-count">The count is {this.state.count}</div>
        <button
          data-test="display-button"
          onClick={this.handleIncrement.bind(this)}
        >
          Increment
        </button>
      */}
      </div>
    );
  }
}

export default App;
