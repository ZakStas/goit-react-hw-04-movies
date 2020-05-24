import React, { Component } from "react";
import * as Api from "../../services/Api";
import reviewsMapper from "../../mappers/reviewsMapper";
import ReviewsList from "../ReviewsList/ReviewsList";
import PropTypes from "prop-types";

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  state = {
    reviews: []
  };

  componentDidMount() {
    const { id } = this.props;
    Api
      .getFilmReviews(id)
      .then(data => this.setState({ reviews: reviewsMapper(data.results) }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { reviews } = this.state;
    const { onClick } = this.props;
    return <ReviewsList reviews={reviews} onClick={onClick} />;
  }
}