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
      const { inputData, isArabic } = action.payload;

      return [
        {
          taskDetails: inputData,
          done: false,
          id: uniqueNumber,
          doneQuant: 0,
          taskDate: timestamp,
          isArabic: isArabic,
        },
        ...state,
      ];

    case TASKS_REDUCER_CONSTANTS.TASKS_DELETE_TASK:
      const restTasks = state.filter(
        (findTask) => action.payload.id !== findTask.id
      );

      return restTasks;

    case TASKS_REDUCER_CONSTANTS.TASKS_DELETE_ALL_TASK:
      return [];

    case TASKS_REDUCER_CONSTANTS.TASKS_DONE_TASK:
      const doneTask = state.find(
        (findTask) => action.payload.id === findTask.id
      );

      const undoneTasks = state.filter(
        (findTask) => action.payload.id !== findTask.id
      );

      return [...undoneTasks, { ...doneTask, done: true, doneQuant: 1 }];

    case TASKS_REDUCER_CONSTANTS.TASKS_EDIT_TASK:
      const { editableTask, newTask } = action.payload;

      const findEditedTask = state.find(
        (findTask) => editableTask.id === findTask.id
      );

      const newState = state.map((findTask) =>
        editableTask.id !== findTask.id
          ? findTask
          : { ...findEditedTask, taskDetails: newTask }
      );

      // return [...newState, { ...findEditedTask, taskDetails: newTask }];
      return newState;
    default:
      return state;
  }
};

export default TasksReducer;
