export type Filter = "open" | "in-progress" | "done" | null;

export enum FILTER_ACTIONS {
  FILTER_SET = "filter/set",
}

export interface SetFilterAction {
  type: typeof FILTER_ACTIONS.FILTER_SET;
  filter: Filter;
}

export type FilterActionTypes = SetFilterAction;
