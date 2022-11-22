import {combineReducers, legacy_createStore} from "redux";
import postReducer from "./Reducers/postReducer";
import messageReducer from "./Reducers/MessageReducer";

let reducers = combineReducers({
    postPage: postReducer,
    messagesPage: messageReducer
});

let store = legacy_createStore(reducers);

export default store;