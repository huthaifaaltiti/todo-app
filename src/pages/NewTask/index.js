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
  const [doneDivs, setDoneDivs] = useState([]);
  const [isEditable, setIsEditable] = useState(false);

  console.log(tasks);

  function handleAddNewTask() {
    dispatch(addNewTask(inputData));
  }

  function handleDeleteTask(task) {
    dispatch(deleteTask(task));
  }

  function handleDoneTask(index) {
    setDoneDivs((prev) => [...prev, index]);
  }

  function handleEditTask() {
    setIsEditable(true);
  }

  return (
    <div className={styles.newTaskPage}>
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
          <div
            key={index}
            className={`${styles.taskCont} ${
              doneDivs.includes(index) ? styles.doneTask : ""
            }`}
          >
            <h3>{task.taskDetails}</h3>

            <div className={styles.taskControl}>
              {/* Delete btn */}
              <span>
                <MdDeleteOutline
                  onClick={() => handleDeleteTask(task)}
                  className={styles.taskControlIcon}
                />
              </span>

              {/* edit btn */}
              <span>
                <FiEdit2
                  onClick={handleEditTask}
                  className={styles.taskControlIcon}
                />
              </span>

              {/* done btn */}
              <span>
                <TiTickOutline
                  onClick={() => handleDoneTask(index)}
                  className={styles.taskControlIcon}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
