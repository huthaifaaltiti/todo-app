// TasksReducer Constants
import * as TASKS_REDUCER_CONSTANTS from "./constants";

// TasksReducer state
const initialState = [];

// TasksReducer
const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_REDUCER_CONSTANTS.TASKS_ADD_TASK:
      const uniqueNumber = Date.now();

      const timestamp = new Date().toLocaleString();

      return [
        ...state,
        {
          taskDetails: action.payload,
          done: false,
          id: uniqueNumber,
          doneQuant: 0,
          taskDate: timestamp,
        },
      ];

    case TASKS_REDUCER_CONSTANTS.TASKS_DELETE_TASK:
      const restArr = state.filter(
        (findTask) => action.payload.id !== findTask.id
      );

      return restArr;

    case TASKS_REDUCER_CONSTANTS.TASKS_DELETE_ALL_TASK:
      return [];

    case TASKS_REDUCER_CONSTANTS.TASKS_DONE_TASK:
      const restArr2 = state.find(
        (findTask) => action.payload.id === findTask.id
      );

      const restArr3 = state.filter(
        (findTask) => action.payload.id !== findTask.id
      );

      return [...restArr3, { ...restArr2, done: true, doneQuant: 1 }];

    case TASKS_REDUCER_CONSTANTS.TASKS_EDIT_TASK:
      const { editableTask, newTask } = action.payload;

      // find x ==> rest - x
      const restArr4 = state.find(
        (findTask) => editableTask.id === findTask.id
      );

      const restArr5 = state.filter(
        (findTask) => editableTask.id !== findTask.id
      );

      return [...restArr5, { ...editableTask, taskDetails: newTask }];

    default:
      return state;
  }
};

export default TasksReducer;
