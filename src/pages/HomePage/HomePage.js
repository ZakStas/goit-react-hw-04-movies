import React, { Component } from "react";
import * as Api from "../../services/Api";
import filmsMapper from "../../mappers/filmsMapper";
import FilmsList from "../../components/FilmsList/FilmsList";

export default class HomePage extends Component {
  state = {
    popularFilms: []
  };

  componentDidMount() {
    Api
      .getPopularFilms()
      .then(({ data }) => {
        this.setState({ popularFilms: filmsMapper(data.results) });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { popularFilms } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <FilmsList films={popularFilms} />
      </>
    );
  }
}