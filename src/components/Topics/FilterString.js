import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      filteredNames: [],
      userInput: ""
    };
  }
  changeHandler(val) {
    this.setState({ userInput: val });
  }

  filterString(str) {
    let newArr = [];
    let myNames = this.state.names;
    for (let i = 0; i < myNames.length; i++) {
      if (myNames[i].includes(str)) {
        newArr.push(myNames[i]);
      }
    }
    this.setState({ filteredNames: newArr });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
        <input
          onChange={e => {
            this.changeHandler(e.target.value);
          }}
          className="inputLine"
        />
        <button
          onClick={() => {
            this.filterString(this.state.userInput);
          }}
          className="confirmationButton"
        >
          Click
        </button>
        <span className="resultsBox filterStringRB">
          Filtered:
          {JSON.stringify(this.state.filteredNames)}
        </span>
      </div>
    );
  }
}

export default FilterString;
