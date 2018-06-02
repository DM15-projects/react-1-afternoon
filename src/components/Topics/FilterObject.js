import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],
      newArray: [],
      userInput: ""
    };
  }
  inputChangeHandler(val) {
    this.setState({ userInput: val });
  }

  clickHandler(str) {
    var newArr = [];
    var employees = this.state.employees;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(str)) {
        newArr.push(employees[i]);
      }
    }
    this.setState({ newArray: newArr });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.employees)}
        </span>
        <input
          onChange={e => this.inputChangeHandler(e.target.value)}
          className="inputLine"
          placeholder="enter string to filter"
        />
        <button
          onClick={() => this.clickHandler(this.state.userInput)}
          className="confirmationButton"
        >
          Click to filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered objects:{JSON.stringify(this.state.newArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
