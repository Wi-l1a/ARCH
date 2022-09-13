import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import ToursReducers from "./Reducers/ToursReducer";
import userReducer from './Reducers/UsersReducers';

const rootReducer = combineReducers({
    tours: ToursReducers,
    users: userReducer,

})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))