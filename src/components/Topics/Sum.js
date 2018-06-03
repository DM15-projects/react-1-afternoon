import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      results: "",
      firstInput: "",
      secondInput: ""
    };
  }

  firstChange(val) {
    this.setState({ firstInput: val });
  }

  secondChange(val) {
    this.setState({ secondInput: val });
  }

  addSum(num1, num2) {
    let total = parseInt(num1) + parseInt(num2);
    this.setState({ results: total });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          onChange={e => this.firstChange(e.target.value)}
          className="inputLine"
          placeholder="first number"
        />
        {/* <p>{this.state.firstInput}</p> */}
        <input
          onChange={e => this.secondChange(e.target.value)}
          className="inputLine"
          placeholder="second number"
        />
        {/* <p>{this.state.secondInput}</p> */}
        <button
          onClick={() => {
            this.addSum(this.state.firstInput, this.state.secondInput);
          }}
          className="confirmationButton"
        >
          Click for Sum
        </button>
        <span className="resultsBox">Sum:{this.state.results}</span>
      </div>
    );
  }
}

export default Sum;
