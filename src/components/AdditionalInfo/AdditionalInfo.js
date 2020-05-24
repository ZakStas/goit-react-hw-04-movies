import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./AdditionalInfo.module.css";

const AdditionalInfo = ({ id, onClick }) => (
  <>
    <h3>Additional information</h3>
    <ul className={styles.linksList}>
      <li onClick={onClick}>
        <Link
          to={{
            pathname: `/movies/${id}/cast`
          }}
        >
          Cast
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          to={{
            pathname: `/movies/${id}/reviews`
          }}
        >
          Reviews
        </Link>
      </li>
    </ul>
  </>
);
AdditionalInfo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
export default AdditionalInfo;