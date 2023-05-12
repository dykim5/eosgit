import { createStore, combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});

const store = createStore(rootReducer);

export default rootReducer;
