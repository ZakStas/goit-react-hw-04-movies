import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonGoBack.module.css";

const ButtonGoBack = ({ onGoback }) => (
  <button className={styles.buttonGoBack} type="button" onClick={onGoback}>
    Go back
  </button>
);

ButtonGoBack.propTypes = {
  onGoback: PropTypes.func.isRequired
};

export default ButtonGoBack;