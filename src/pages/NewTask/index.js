// react
import React, { useState } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";
// react-helmet
import { Helmet } from "react-helmet";

// component
import Task from "../../components/Task";

// creator functions
import {
  addNewTask,
  deleteAllTasks,
} from "../../redux/reducers/TasksReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineDeleteSweep } from "react-icons/md";

export default function NewTask() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.TasksReducer);

  function handleAddNewTask() {
    dispatch(addNewTask(inputData));
  }

  return (
    <div className={styles.newTaskPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add New Task</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h2>Enter a new task:</h2>

      <div className={styles.inputCont}>
        <input
          className={styles.taskInput}
          type="text"
          onChange={(e) => setInputData(e.target.value)}
          required
        />

        <span className={styles.placeholder}>New Task</span>

        <button className={styles.taskInputBtn} onClick={handleAddNewTask}>
          <span>
            <IoIosAdd />
          </span>
          Add Task
        </button>
      </div>

      <div className={styles.tasksCont}>
        {tasks.length > 1 ? (
          <div
            className={styles.deleteAllCont}
            onClick={() => {
              dispatch(deleteAllTasks());
            }}
          >
            <span>
              <MdOutlineDeleteSweep className={styles.deleteAllIcon} />
              Delete All
            </span>
          </div>
        ) : (
          ""
        )}
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    </div>
  );
}
