import { Goods } from "../../types/goods";

export enum MODAL_MODE {
  SHOW = "MODAL/SHOW",
  HIDE = "MODAL/HIDE",
  SHOW_EDIT = "MODAL/SHOW/EDIT",
}

interface ShowModalAction {
  type: MODAL_MODE.SHOW;
}
interface HideModalAction {
  type: MODAL_MODE.HIDE;
}

interface ShowModalEditAction {
  type: MODAL_MODE.SHOW_EDIT;
  item?: Goods;
}
export type ModalActionTypes =
  | ShowModalAction
  | HideModalAction
  | ShowModalEditAction;
