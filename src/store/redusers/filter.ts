import {
  Filter,
  FilterActionTypes,
  FILTER_ACTIONS,
} from "../action_types/filter";

const initialState: Filter = null;

export const filterReducer = (
  state: Filter = initialState,
  action: FilterActionTypes
): Filter => {
  switch (action.type) {
    case FILTER_ACTIONS.FILTER_SET:
      return action.filter;
    default:
      return state;
  }
};
