import { createStore } from "redux";
import rootReducers from "../Reducers/index";

const store = createStore(rootReducers);

console.log("store", store);

export default store;
