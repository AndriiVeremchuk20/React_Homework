import { combineReducers } from "redux";
import { modalReducer } from "./modal";
import { filterReducer } from "./filter";
import { todoReducer } from "./todo";

export const rootReducer = combineReducers({
  todo: todoReducer,
  modal: modalReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
