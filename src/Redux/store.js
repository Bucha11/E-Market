import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./Reducers/HomeReducer";

let reducers=combineReducers(homeReducer)
export let store=createStore(reducers,applyMiddleware(thunk))