import React, { Component } from "react";
import firebase from "../firebase.js";

class DreamForm extends Component {
  constructor() {
    super();
    this.state = {
      dreams: [],
      titleInput: "",
      dreamInput: "",
      inputError: true,
    };
  }

  componentDidMount() {
    //create a variable to store a reference to our database
    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {
      //event listener that is returning a snapshot of what is in our database
      const newState = [];
      //take object from firebase and push to an array
      //create a variable  that we will set newState to update dreams
      const data = response.val();

      for (let key in data) {
        newState.push({
          content: data[key],
          id: key,
        });
      }
      this.setState({
        dreams: newState,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      // userInput: event.target.value,
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    //tell react to submit inputs
    const dbRef = firebase.database().ref();
    //reference to the database

    let error = this.state.dreamInput === "";

    if (error) {
      // console.log("string is empty");
      alert("");
    } else {
      const inputObj = {
        title: this.state.titleInput,
        desc: this.state.dreamInput,
      };
      //create object to push both inputs

      dbRef.push(inputObj);

      this.setState({
        titleInput: "",
        dreamInput: "",
        inputError: false,
      });
    }

    //after user adds information, clear inputs
  };

  deleteDream = (dreamId) => {
    //tell fb to delete a book based on its unique id
    const dbRef = firebase.database().ref();
    //remove the specific node in fb based on its unique id

    dbRef.child(dreamId).remove();
    //find data that lives in dreamID and remove it
  };

  render() {
    return (
      <form>
        <div className="dreamDiv">
          Dream Title:{" "}
          <input
            value={this.state.titleInput}
            onChange={this.handleChange}
            name="titleInput"
            type="text"
          />
          <br />
          Dream Content:
          <input
            value={this.state.dreamInput}
            onChange={this.handleChange}
            name="dreamInput"
            type="text"
          />
          <h3>error</h3>
          <br />
          <button onClick={this.handleClick}>Add Dream</button>
          <ul>
            {this.state.dreams.map((dream) => {
              return (
                <li key={dream.id}>
                  <p>{dream.content.title}</p>
                  <p>{dream.content.desc}</p>
                  {/* target inputs in object by name */}
                  <button onClick={() => this.deleteDream(dream.id)}>
                    Delete
                  </button>
                  {/* create button to delete dream by id */}
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    );
  }
}

export default DreamForm;
