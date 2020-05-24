import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const FilmsList = ({ films, location }) => {
  return (
    <ul>
      {films.map(({ title, name, id }) => (
        <li key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(FilmsList);