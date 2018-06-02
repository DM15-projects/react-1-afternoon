import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      palindrome: "",
      userInput: ""
    };
  }

  changeHandler(val) {
    this.setState({ userInput: val });
  }

  checkPalindrome(str) {
    var original = str;
    var revStr = str
      .split("")
      .reverse()
      .join("");
    if (original === revStr) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          onChange={e => {
            this.changeHandler(e.target.value);
          }}
          className="inputLine"
          placeholder="enter string here"
        />
        <button
          onClick={() => this.checkPalindrome(this.state.userInput)}
          className="confirmationButton"
        >
          Click
        </button>
        <span className="resultsBox">Results: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
