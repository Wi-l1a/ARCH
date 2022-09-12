import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import ToursReducers from "./Reducers/ToursReducer";
const rootReducer = combineReducers({
    tours: ToursReducers
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))