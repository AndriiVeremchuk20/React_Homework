import { Dispatch } from "react";
import { Goods } from "../../types/goods";
import { ModalActionTypes, MODAL_MODE } from "../action_types/modal";

export const showModalAction = () => {
  return async (dispatch: Dispatch<ModalActionTypes>) => {
    dispatch({ type: MODAL_MODE.SHOW });
  };
};

export const hideModalAction = () => {
  return async (dispatch: Dispatch<ModalActionTypes>) => {
    dispatch({ type: MODAL_MODE.HIDE });
  };
};

export const showModalEditAction = (item?: Goods) => {
  return async (dispatch: Dispatch<ModalActionTypes>) => {
    dispatch({
      type: MODAL_MODE.SHOW_EDIT,
      item: item,
    });
  };
};
