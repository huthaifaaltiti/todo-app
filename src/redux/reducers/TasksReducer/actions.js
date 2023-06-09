// tasksReducer constants
import * as TASKS_REDUCER_CONSTANTS from "./constants";

// creator functions
export const addNewTask = (inputData, isArabic) => (dispatch) => {
  dispatch({
    type: TASKS_REDUCER_CONSTANTS.TASKS_ADD_TASK,
    payload: { inputData, isArabic },
  });
};

export const deleteTask = (task) => (dispatch) => {
  dispatch({
    type: TASKS_REDUCER_CONSTANTS.TASKS_DELETE_TASK,
    payload: task,
  });
};

export const deleteAllTasks = () => (dispatch) => {
  dispatch({
    type: TASKS_REDUCER_CONSTANTS.TASKS_DELETE_ALL_TASKS,
  });
};

export const doneTask = (task) => (dispatch) => {
  dispatch({
    type: TASKS_REDUCER_CONSTANTS.TASKS_DONE_TASK,
    payload: task,
  });
};

export const editTask = (editableTask, newTask) => (dispatch) => {
  dispatch({
    type: TASKS_REDUCER_CONSTANTS.TASKS_EDIT_TASK,
    payload: { editableTask, newTask },
  });
};
