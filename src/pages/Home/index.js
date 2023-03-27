// react
import React, { useState } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";
// creator functions
import { addNewTask } from "../../redux/reducers/TasksReducer/actions";

// styles
import styles from "./styles.module.css";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.TasksReducer);

  function handleAddNewTask() {
    dispatch(addNewTask(inputData));
  }

  return (
    <div className={styles.homePage}>
      <h2>Enter a new task:</h2>

      <div>
        <input type="text" onChange={(e) => setInputData(e.target.value)} />

        <button onClick={handleAddNewTask}>Add Task</button>
      </div>

      <div>
        {tasks.map((task) => (
          <h3>{task.task}</h3>
        ))}
      </div>
    </div>
  );
}
