import { Goods } from "../../types/goods";
import { ModalActionTypes, MODAL_MODE } from "../action_types/modal";

interface ModalState {
  show: boolean;
  item?: Goods;
}

const initialState: ModalState = {
  show: false,
  item: undefined,
};

export const modalReducer = (
  state = initialState,
  action: ModalActionTypes
): ModalState => {
  switch (action.type) {
    case MODAL_MODE.SHOW:
      return { ...state, show: true };
    case MODAL_MODE.HIDE:
      return { ...state, show: false, item: undefined };
    case MODAL_MODE.SHOW_EDIT:
      console.log(action.item);
      return { ...state, show: true, item: action.item };
    default:
      return state;
  }
};
