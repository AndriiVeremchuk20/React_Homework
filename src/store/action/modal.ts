import { Goods } from "../../types/goods";
import { ModalActionTypes, MODAL_MODE } from "../action_types/modal";

export const ModalShowAction = (): ModalActionTypes => ({
  type: MODAL_MODE.SHOW,
});

export const ModalHideAction = (): ModalActionTypes => ({
  type: MODAL_MODE.HIDE,
});

export const ModalShowEditAction = (item?: Goods): ModalActionTypes => ({
  type: MODAL_MODE.SHOW_EDIT,
  item,
});
