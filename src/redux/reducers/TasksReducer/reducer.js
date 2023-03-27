// TasksReducer Constants
import * as TASKS_REDUCER_CONSTANTS from "./constants";

// TasksReducer state
const initialState = [];

// TasksReducer
const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_REDUCER_CONSTANTS.TASKS_ADD_TASK:
      return [...state, { taskDetails: action.payload, done: false }];
    default:
      return state;
  }
};

export default TasksReducer;
