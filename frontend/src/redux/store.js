import {combineReducers, createStore} from "redux";
import ListReducer from "./mainreducer";
let reducers=combineReducers({
    mainPage:ListReducer,});
let store=createStore(reducers);
export default store;