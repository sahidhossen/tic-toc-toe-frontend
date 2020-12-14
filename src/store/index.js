import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducers from "../reducers";

export const middlewares = [thunkMiddleware];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(Reducers);
