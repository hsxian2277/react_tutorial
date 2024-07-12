import React, { Component } from "react";

export default class Exercise9 extends Component {
  state = {
    currId: 1,
    prevId: 1,
    post: {},
    input: '',
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.currId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ...this.state, post: data });
      });
  }

  componentDidUpdate() {
    if (this.state.prevId > 0 && this.state.prevId !== this.state.currId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.currId}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ ...this.state, prevId: this.state.currId, post: data });
        });
    }
  }

  handlePrev = () => {
    this.setState({ ...this.state, prevId: this.state.currId, currId: this.state.currId - 1});
  }

  handleNext = () => {
    this.setState({ ...this.state, prevId: this.state.currId, currId: this.state.currId + 1});
  }

  handleInput = (e) => {
    this.setState({ ...this.state, input: e.target.value});
  }

  handleSearch = () => {
    const regex = new RegExp(/^[1-9][0-9]?$|^100$/);
    if (!regex.test(this.state.input) || this.state.input < 1 || this.state.input > 100) {
      alert('Invalid ID, must be a number between 1-100.');
      this.setState({ ...this.state, input: ''});
      return;
    }
    this.setState({ ...this.state, currId: Number(this.state.input), input: ''});
  }

  render() {
    const { currId } = this.state;
    const { title, userId, body } = this.state.post;

    return (
      <div className="Post-Fetcher">
        <h2>Post Fetcher</h2>
        <div className="Display">
          <table>
            <tbody>
              <tr>
                <td><b>Current Post ID:</b></td>
                <td>{currId}</td>
              </tr>
              <tr>
                <td><b>Title:</b></td>
                <td>{title}</td>
              </tr>
              <tr>
                <td><b>User ID:</b></td>
                <td>{userId}</td>
              </tr>
              <tr>
                <td><b>Body:</b></td>
                <td>{body}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* assume the minimum id is 1, max is 100, disable the buttons if needed */}
        <div className="Buttons">
          <button disabled={this.state.currId === 1} onClick={this.handlePrev}>Prev</button>
          <button disabled={this.state.currId === 100} onClick={this.handleNext}>Next</button>
        </div>
        <div className="Form">
          <label htmlFor="postId">Post ID: </label>
          <input onChange={this.handleInput} value={this.state.input} placeholder="Enter a post ID(1-100)" type="text" id="postId" name="postId"></input>
          <button className="Search-Btn" onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}

// bonus: use input bar to enter the id of the post. if id is out of range, display some error message