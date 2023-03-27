// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <h2>Enter a new task:</h2>

      <div>
        <input type="text" />

        <button>Add Task</button>
      </div>
    </div>
  );
}
