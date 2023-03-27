// react
import React, { useState } from "react";

// react-redux
import { useDispatch } from "react-redux";

// creator functions
import { deleteTask } from "../../redux/reducers/TasksReducer/actions";

import styles from "./styles.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";

export default function Task({ task, index }) {
  const dispatch = useDispatch();
  const [doneDivs, setDoneDivs] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableTask, setEditableTask] = useState({});
  const [newTask, setNewTask] = useState("");

  function handleDeleteTask(task) {
    dispatch(deleteTask(task));
  }

  function handleDoneTask(index) {
    setDoneDivs((prev) => [...prev, index]);
  }

  function handleEditTask(task) {
    setIsEditable(true);

    setEditableTask(task);
  }

  function handleSaveTask() {
    setEditableTask((prev) => {
      return {
        ...prev,
        taskDetails: newTask,
      };
    });

    setIsEditable(false);
  }

  return (
    <div
      className={`${styles.taskCont} ${
        doneDivs.includes(index) ? styles.doneTask : ""
      }`}
    >
      <div>
        {isEditable ? (
          <div>
            <input
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              defaultValue={editableTask?.taskDetails}
            />

            <span>
              <span onClick={handleSaveTask}>save</span>

              <br />
              <span onClick={() => setIsEditable(false)}>cancle</span>
            </span>
          </div>
        ) : (
          editableTask?.taskDetails || task?.taskDetails
        )}
      </div>

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
            onClick={() => handleEditTask(task)}
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
  );
}
