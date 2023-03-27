// react
import React, { useState } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// creator functions
import {
  addNewTask,
  deleteTask,
} from "../../redux/reducers/TasksReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";

export default function NewTask() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.TasksReducer);

  console.log(tasks);

  function handleAddNewTask() {
    dispatch(addNewTask(inputData));
  }

  function handleDeleteTask(task) {
    dispatch(deleteTask(task));
  }

  return (
    <div>
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
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCont}>
            <h3>{task.taskDetails}</h3>

            <div className={styles.taskControl}>
              {/* Delete btn */}
              <span>
                <MdDeleteOutline
                  onClick={() => handleDeleteTask(task, index)}
                  className={styles.taskControlIcon}
                />
              </span>

              <span>
                <FiEdit2 className={styles.taskControlIcon} />
              </span>

              <span>
                <TiTickOutline className={styles.taskControlIcon} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
