// TasksReducer Constants
import * as TASKS_REDUCER_CONSTANTS from "./constants";

// TasksReducer state
const initialState = [];

// TasksReducer
const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_REDUCER_CONSTANTS.TASKS_ADD_TASK:
      const uniqueNumber = Date.now();

      return [
        ...state,
        { taskDetails: action.payload, done: false, id: uniqueNumber },
      ];

    case TASKS_REDUCER_CONSTANTS.TASKS_DELETE_TASK:
      const findTask = state.filter(
        (findTask) => action.payload.id !== findTask.id
      );

      return findTask;

    default:
      return state;
  }
};

export default TasksReducer;
