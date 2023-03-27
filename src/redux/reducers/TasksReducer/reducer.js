// TasksReducer Constants
import * as TASKS_REDUCER_CONSTANTS from "./constants";

// TasksReducer state
const initialState = {
  done: false,
};

// TasksReducer
const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default TasksReducer;
