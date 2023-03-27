// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-redux
import { useSelector } from "react-redux";

// styles
import styles from "./styles.module.css";

export default function Home() {
  const tasks = useSelector((state) => state.TasksReducer);

  return (
    <div className={styles.homePage}>
      <h1 className={styles.userName}>Hi Huthaifa!</h1>

      <div className={styles.dashboardCont}>
        <div className={styles.dashboardMainBox}>
          <h3>Total Tasks</h3>

          <div className={styles.dashboardSubBox}>g</div>
        </div>

        <div className={styles.dashboardMainBox}>
          <h3>Total Tasks</h3>

          <div className={styles.dashboardSubBox}>
            <div>1</div>
            <div>4 Tasks</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                placeat numquam quaerat. Enim repudiandae necessitatibus
                molestiae.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.dashboardMainBox}>
          <h3>Total Tasks</h3>

          <div className={styles.dashboardSubBox}>g</div>
        </div>

        {/* <Link to="/tasks">
          <span> Add new task.</span>
        </Link> */}
      </div>
    </div>
  );
}
