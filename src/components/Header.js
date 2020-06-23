import React, { Component } from "react";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      img: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      responseType: "JSON",
      params: {
        client_id: "cDOViFNyBQD9qXEF626qEz25DTg6KOHx8b_2oq7mPdw",
        count: "1",
        query: "galaxy",
      },
    }).then((response) => {
      let img = response.data[0].urls.regular;
      this.setState({
        img,
      });
      console.log(response);
    });
  }

  render() {
    return (
      <div className="background">
        <img src={this.state.img} />
        <h1 className="header-title">Lucid</h1>
      </div>
    );
  }
}

export default Header;
