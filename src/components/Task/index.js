// react
import React, { useState, useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// creator functions
import {
  deleteTask,
  doneTask,
  editTask,
} from "../../redux/reducers/TasksReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineDone } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export default function Task({ task, index }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.TasksReducer);

  // const [doneDivs, setDoneDivs] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableTask, setEditableTask] = useState({});
  const [newTask, setNewTask] = useState("");

  // the Unix timestamp (in milliseconds)
  const earlierDate = new Date(task?.taskDate).getTime();
  const currentDate = new Date().getTime();
  const diffInMilliseconds = currentDate - earlierDate;

  // days
  const daysDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  // hours
  const hoursDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60));

  // minutes
  const minutesDiff = Math.floor(diffInMilliseconds / (1000 * 60));

  function handleDeleteTask(task) {
    dispatch(deleteTask(task));
  }

  function handleDoneTask(task, index) {
    // setDoneDivs((prev) => [...prev, index]);

    dispatch(doneTask(task));
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

    dispatch(editTask(editableTask, newTask));
  }

  return task.done === true ? (
    <div className={`${styles.taskCont} ${styles.doneTask}`}>
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
          <>{editableTask?.taskDetails || task?.taskDetails}</>
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
            onClick={() => handleDoneTask(task, index)}
            className={styles.taskControlIcon}
          />
        </span>
      </div>
    </div>
  ) : (
    <div className={`${styles.taskCont}`}>
      <div>
        {isEditable ? (
          <div className={styles.editableTaskCont}>
            <div className={styles.editableInputTaskCont}>
              <input
                className={styles.editableInputTask}
                onChange={(e) => setNewTask(e.target.value)}
                type="text"
                defaultValue={editableTask?.taskDetails}
              />
            </div>

            <span className={styles.editableTaskControl}>
              <span onClick={handleSaveTask}>
                <MdOutlineDone className={styles.editTaskIcon} />
              </span>

              <br />
              <span onClick={() => setIsEditable(false)}>
                <GrClose className={styles.editTaskIcon} />
              </span>
            </span>
          </div>
        ) : (
          <>
            {editableTask?.taskDetails || task?.taskDetails}

            <p
              className={styles.createdDateMessage}
            >{`🕑 Since: ${daysDiff} Days, ${hoursDiff} Hours, and ${minutesDiff} Minutes`}</p>
          </>
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
            onClick={() => handleDoneTask(task, index)}
            className={styles.taskControlIcon}
          />
        </span>
      </div>
    </div>
  );
}
