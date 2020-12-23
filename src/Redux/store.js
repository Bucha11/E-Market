import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/authReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { homeReducer } from "./Reducers/homeReducer";

let reducers=combineReducers({home:homeReducer,auth:authReducer,cart:cartReducer})
export let store=createStore(reducers,applyMiddleware(thunk))