import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./Reducers/homeReducer";

let reducers=combineReducers({home:homeReducer})
export let store=createStore(reducers,applyMiddleware(thunk))