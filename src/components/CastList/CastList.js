import React from "react";
import PropTypes from "prop-types";
import styles from "./CastList.module.css";

const CastList = ({ cast, onClick }) => {
  return (
    <>
      {cast.length ? (
        <ul className={styles.castList} onClick={onClick}>
          {cast.map(({ profile_path, name, character, id }) => (
            <li key={id}>
              <img
                className={styles.castPhoto}
                src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
                alt="member of cast"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there is no information about cast.</p>
      )}
    </>
  );
};
CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};
export default CastList;