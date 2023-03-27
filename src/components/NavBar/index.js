// react
import React from "react";
// react-router-dom
import { NavLink } from "react-router-dom";

// styles, icons
import styles from "./styles.module.css";
import { MdPlaylistAdd } from "react-icons/md";

export default function NavBar() {
  return (
    <div className={styles.mainNavBar}>
      <div className={styles.navBarLogo}>
        <h2>
          {/* decoration spans */}
          <span></span>
          <span></span>
          Your ToDo App
        </h2>
      </div>

      <div className={styles.navBarControl}>
        <NavLink className={styles.navBarLinks} to="/">
          <span>Dashboard</span>
        </NavLink>

        <NavLink className={styles.navBarLinks} to="/tasks">
          <span>Tasks</span>
        </NavLink>

        <NavLink to="/new-task">
          <span className={styles.addNewTask}>
            <MdPlaylistAdd className={styles.navBarAddTaskIcon} />
          </span>
        </NavLink>
      </div>
    </div>
  );
}
