import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import * as Api from "../../services/Api";
import getIdFromProps from "../../mappers/getId";
import ButtonGoBack from "../../components/ButtomGoBack/ButtonGoBack";
import AboutFilm from "../../components/AboutFilm/AboutFilm";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
const queryString = require("query-string");

export default class MoviesDetailsPage extends Component {
  state = {
    film: null,
    query: ""
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    Api
      .getFilmWithId(id)
      .then(film => this.setState({ film }))
      .catch(error => {
        console.log(error);
      });

    if (this.props.location.state) {
      this.setState({
        query: queryString.parse(this.props.location.state.from.search).query
      });
    }
  }


  handleGoback = () => {
    const { history } = this.props;
    const { query } = this.state;

    if (query) {
      return history.push(`/movies?query=${query}`);
    } else {
      return history.push("/");
    }
  };

  handleCloseCastOrReviews = e => {
    const { history, location } = this.props;
    const id = getIdFromProps(this.props);
    if (
      location.pathname.split("/").includes("cast") ||
      location.pathname.split("/").includes("reviews")
    ) {
      if (
        location.pathname.split("/").includes("cast") &&
        e.currentTarget.textContent === "Reviews"
      ) {
        return history.push(`/movies/${id}/reviews`);
      } else if (
        location.pathname.split("/").includes("reviews") &&
        e.currentTarget.textContent === "Cast"
      ) {
        return history.push(`/movies/${id}/cast`);
      } else history.push(`/movies/${id}`);
    }
  };

  handleCloseCastOrReviewsByClickOnList = () => {
    const { history } = this.props;
    const id = getIdFromProps(this.props);
    history.push(`/movies/${id}`);
  };

  render() {
    const { film } = this.state;
    const { match } = this.props;
    return (
      <>
        {film && (
          <>
            <ButtonGoBack onGoback={this.handleGoback} />
            <AboutFilm {...film} />
            <AdditionalInfo
              id={film.id}
              onClick={this.handleCloseCastOrReviews}
            />
            <Switch>
              <Route
                path={`${match.path}/cast`}
                render={props => (
                  <Cast
                    id={film.id}
                    onClick={this.handleCloseCastOrReviewsByClickOnList}
                  />
                )}
              />
              <Route
                path={`${match.path}/reviews`}
                render={props => (
                  <Reviews
                    id={film.id}
                    onClick={this.handleCloseCastOrReviewsByClickOnList}
                  />
                )}
              />
            </Switch>
          </>
        )}
      </>
    );
  }
}