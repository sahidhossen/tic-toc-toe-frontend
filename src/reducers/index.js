import { combineReducers } from "redux";
import GameReducer from "./gameReducer";

const reducers = combineReducers({ game: GameReducer });

export default reducers;
