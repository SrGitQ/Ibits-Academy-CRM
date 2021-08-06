import { createStore, combineReducers, applyMiddleware } from "redux";

import clientsReducer from "../clientsReducer";

const rootReducer = combineReducers(
    { clients: clientsReducer }
)

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware())
}

export default configureStore