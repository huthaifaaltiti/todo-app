// redux
import { combineReducers } from "redux";

// reducers
import TasksReducer from "./reducers/TasksReducer/reducer";

const AllReducers = combineReducers({
  TasksReducer,
});

export default AllReducers;
