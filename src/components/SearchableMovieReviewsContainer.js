import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "FfGrHwh43u9QATz0EGNpaggmVz7zpAiC";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("this for has been submited");
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
          this.setState({
            reviews: data.results
        })
        });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
