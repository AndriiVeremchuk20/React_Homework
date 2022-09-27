import { Dispatch } from "@reduxjs/toolkit";
import {
  Filter,
  FilterActionTypes,
  FILTER_ACTIONS,
} from "../action_types/filter";

export const setFilter = (filter: Filter) => {
  return (dispatch: Dispatch<FilterActionTypes>) => {
    dispatch({
      type: FILTER_ACTIONS.FILTER_SET,
      filter,
    });
  };
};
