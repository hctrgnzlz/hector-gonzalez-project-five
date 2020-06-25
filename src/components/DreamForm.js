import React, { Component } from "react";
import swal from "sweetalert";
import firebase from "../firebase.js";

class DreamForm extends Component {
  constructor() {
    super();
    this.state = {
      dreams: [],
      titleInput: "",
      dreamInput: "",
      date: new Date(),
    };
    this.scrollContent = React.createRef();
    this.scrollTop = React.createRef();
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

  scrollDream = () => {
    window.scrollTo(0, this.scrollContent.current.offsetTop);
  };

  // Function to scroll to top of the page on refresh
  scrollToTop = () => {
    window.scrollTo(0, this.scrollTop.current.offsetTop);
  };

  handleRefresh = (event) => {
    event.preventDefault();
    this.scrollToTop();
  };

  handleClick = (event) => {
    event.preventDefault();

    //tell react to submit inputs
    const dbRef = firebase.database().ref();
    //reference to the database

    let error = this.state.dreamInput === "";

    if (error) {
      // console.log("string is empty");
      swal("Here's the title!", "...and here's the text!");
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
      });

      this.scrollDream();
    }

    //after user adds information, clear inputs
  };

  deleteDream = (dreamId) => {
    //tell fb to delete a book based on its unique id
    const dbRef = firebase.database().ref();
    //remove the specific node in fb based on its unique id
    swal({
      title: "Are you sure you want to delete this memory?",
      text: "Once a dream is deleted, you will not be able to recover it",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dbRef.child(dreamId).remove();
      } else {
        swal("Your dream will continue to be stored!");
      }
    });
    // dbRef.child(dreamId).remove();

    //find data that lives in dreamID and remove it
  };

  render() {
    return (
      <form>
        <div className="dreamDiv" ref={this.scrollTop}>
          <input
            value={this.state.titleInput}
            onChange={this.handleChange}
            placeholder="Dream Title"
            name="titleInput"
            type="text"
          />
          <br />
          <input
            value={this.state.dreamInput}
            onChange={this.handleChange}
            placeholder="Dream Content"
            name="dreamInput"
            type="text"
          />
          <br />
          <button onClick={this.handleClick}>Add Dream</button>
          <ul className="dream-list" ref={this.scrollContent}>
            {this.state.dreams.map((dream) => {
              return (
                <li className="dream-item" key={dream.id}>
                  <i
                    className="fas fa-window-close"
                    onClick={() => this.deleteDream(dream.id)}
                  ></i>

                  <p className="dream-title">{dream.content.title}</p>
                  <p className="dream-content">{dream.content.desc}</p>
                  <p className="dream-date">
                    {this.state.date.toLocaleDateString()}
                  </p>
                  {/* target inputs in object by name */}
                  {/* <button onClick={() => this.deleteDream(dream.id)}>
                    Delete
                  </button> */}
                  {/* create button to delete dream by id */}
                </li>
              );
            })}
          </ul>
          <button className="refresh" onClick={this.handleRefresh}>
            TOP{" "}
          </button>
        </div>
      </form>
    );
  }
}

export default DreamForm;
