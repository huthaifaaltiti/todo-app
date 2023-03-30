// react
import React, { useEffect, useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// react-redux
import { useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// component
import Task from "../../components/Task";

// styles
import styles from "./styles.module.css";

export default function Tasks() {
  const tasks = useSelector((state) => state.TasksReducer);
  const unDoneTasks = tasks.filter((task) => task?.done !== true);

  return (
    <div className={styles.tasksPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Unchecked Tasks</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <header className={styles.header}>
        {unDoneTasks?.length === 0 ? (
          <h2>
            You <span>are'nt interested</span> in start tasking, are you?
          </h2>
        ) : (
          <h2>
            Are you <span>interested</span> in?
          </h2>
        )}
      </header>

      <div className={styles.tasksCont}>
        {unDoneTasks.length > 0 ? (
          unDoneTasks?.map((task, index) => <Task key={index} task={task} />)
        ) : (
          <p className={styles.noTasksMessage}>
            No tasks yet.
            <Link to="/new-task">
              <span> Add one.</span>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
