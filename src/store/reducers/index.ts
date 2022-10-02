import { combineReducers } from "@reduxjs/toolkit";
import { goodsReducer } from "./goods";
import { modalReducer } from "./modal";

export const rootReducer = combineReducers({
  goods: goodsReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
