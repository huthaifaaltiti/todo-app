// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";
// react-router-dom
import { Link } from "react-router-dom";

// styles
import styles from "./styles.module.css";

export default function Home() {
  const tasks = useSelector((state) => state.TasksReducer);

  console.log(tasks);
  return (
    <div className={styles.homePage}>
      <h1>Hi Huthaifa!</h1>

      <div>
        <p>
          You have added {tasks.length} tasks to your tasks list.
          <Link to="/tasks">
            <span> Add new task.</span>
          </Link>
          or view your last added tasks.
        </p>
      </div>
    </div>
  );
}
