import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
//store expects an array of middelwares from redux
const middelwares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middelwares));

export default store;
