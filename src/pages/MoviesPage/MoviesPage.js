import React, { Component } from "react";
import * as Api from "../../services/Api";
import filmsMapper from "../../mappers/filmsMapper";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilmList from "../../components/FilmsList/FilmsList";
const queryString = require("query-string");

export default class MoviesPage extends Component {
  state = {
    films: [],
    query: ""
  };

  componentDidMount() {
    const parsedQuery = queryString.parse(this.props.location.search).query;
    if (parsedQuery) {
      this.getFilms(parsedQuery);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.getFilms(query);
      this.props.history.push({
        ...this.props.location,
        search: `query=${query}`
      });
    }
  }

  getFilms = query => {
    Api
      .getFilmByQuery(query)
      .then(data => {
        data.results.length === 0
          ? alert("No films were found :( Try one more time!")
          : this.setState({ films: filmsMapper(data.results) });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = queryString => {
    this.setState({ query: queryString });
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {films.length ? <FilmList films={films} /> : null}
      </>
    );
  }
}