// tasksReducer constants
import * as TASKS_REDUCER_CONSTANTS from "./constants";

// creator functions
export const addNewTask = (inputData) => (dispatch) => {
  dispatch({
    type: TASKS_REDUCER_CONSTANTS.TASKS_ADD_TASK,
    payload: inputData,
  });
};

export const deleteTask = (task) => (dispatch) => {
  dispatch({
    type: TASKS_REDUCER_CONSTANTS.TASKS_DELETE_TASK,
    payload: task,
  });
};
