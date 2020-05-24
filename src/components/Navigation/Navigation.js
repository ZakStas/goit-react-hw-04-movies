import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <ul className={styles.navLinks_List}>
    <li className={styles.navLinks_List_Item}>
      <NavLink
        to="/"
        exact
        activeClassName={styles.active_navLink}
        className={styles.navLink}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.navLinks_List_Item}>
      <NavLink
        to="/movies"
        activeClassName={styles.active_navLink}
        className={styles.navLink}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;