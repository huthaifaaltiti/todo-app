// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";

// component
import Task from "../../components/Task";

// styles
import styles from "./styles.module.css";

export default function Tasks() {
  const tasks = useSelector((state) => state.TasksReducer);
  const unDoneTasks = tasks.filter((task) => task?.done !== true);

  const timestamp = new Date().toLocaleString();

  return (
    <div className={styles.tasksPage}>
      <header className={styles.header}>
        <h2>Are you interested in?</h2>
      </header>

      <div className={styles.tasksCont}>
        {unDoneTasks?.map((task, index) => (
          
          <Task key={index} task={task}  timestamp={timestamp}/>
        ))}
      </div>
    </div>
  );
}
