import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userSelection: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      //update the state to whatever value the user selected
      userSelection: e.target.value,
    });
  };
  render() {
    return (
      <form>
        {/* this.state.userSelection is a value of the select to fully bind all the inputs */}
        {/* when the user selects, call the method of handleChange and change to value selected */}
        <select>
          <option disabled value="">
            Type of Dream
          </option>
          <option value="Lucid">Lucid</option>
          <option value="Nightmare">Nightmare</option>
          <option value="Romantic">Romantic</option>
        </select>
        {/* here we are passing the usreSelection event through our anon function to filter wizards */}
        {/* <button
                    onClick={(event) =>
                        this.props.filterWizards(event, this.state.userSelection)
                    }
                >
                    Find The Death Eaters
        </button> */}
      </form>
    );
  }
}

export default Form;
