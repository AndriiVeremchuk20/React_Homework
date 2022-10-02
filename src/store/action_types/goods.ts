import { ResponseGoodsData } from "../reducers/goods";
import { BaseGoods, FIELD_FOR_SORT_GOODS, Goods } from "../../types/goods";

export enum GOODS_ACTION {
  FETCH_GOODS = "FETCH_GOODS_LIST",
  FETCH_GOODS_SUCCESS = "FETCH_GOODS_LIST_SUCCESS",
  FETCH_GOODS_ERROR = "FETCH_GOODS_LIST_ERROR",

  DELETE_GOODS = "DELETE_GOODS",
  DELETE_GOODS_SUCCESS = "DELETE_GOODS_SUCCESS",
  DELETE_GOODS_ERROR = "DELETE_GOODS_ERROR",

  EDIT_GOODS = "EDIT_GOODS",
  EDIT_GOODS_SUCCESS = "EDIT_GOODS_SUCCESS",
  EDIT_GOODS_ERROR = "EDIT_GOODS_ERROR",

  ADD_GOODS = "ADD_GOODS",
  ADD_GOODS_SUCCESS = "ADD_GOODS_SUCCESS",
  ADD_GOODS_ERROR = "ADD_GOODS_ERROR",

  SET_ORDER = "GOODS/GET_ORDER",
  SET_FILTER = "GOODS/SET_FILTER",
}
//..........................................................//
interface FetchGoodsAction {
  type: GOODS_ACTION.FETCH_GOODS;
}

interface FetchGoodsSuccessAction {
  type: GOODS_ACTION.FETCH_GOODS_SUCCESS;
  goods: ResponseGoodsData;
}

interface FetchErrorAction {
  type: GOODS_ACTION.FETCH_GOODS_ERROR;
  error: string;
}
//.........................................................//

interface DeleteGoodsAction {
  type: GOODS_ACTION.DELETE_GOODS;
  id: string;
}

interface DeleteGoodsSuccessAction {
  type: GOODS_ACTION.DELETE_GOODS_SUCCESS;
  id: string;
}

interface DeleteErrorAction {
  type: GOODS_ACTION.DELETE_GOODS_ERROR;
  error: string;
  id: string;
}
//...........................................................//

interface AddGoodsAction {
  type: GOODS_ACTION.ADD_GOODS;
  item: BaseGoods;
}

interface AddGoodsSuccessAction {
  type: GOODS_ACTION.ADD_GOODS_SUCCESS;
  newItem: Goods;
}

interface AddErrorAction {
  type: GOODS_ACTION.ADD_GOODS_ERROR;
  error: string;
}
//............................................................//

interface EditGoodsAction {
  type: GOODS_ACTION.EDIT_GOODS;
  editedItem: Goods;
}

interface EditGoodsSuccessAction {
  type: GOODS_ACTION.EDIT_GOODS_SUCCESS;
  editedItem: Goods;
}

interface EditErrorAction {
  type: GOODS_ACTION.EDIT_GOODS_ERROR;
  error: string;
  item: Goods;
}

//............................................................//

interface SetOrderTitle {
  type: GOODS_ACTION.SET_ORDER;
  field: FIELD_FOR_SORT_GOODS;
}

interface SetFilter {
  type: GOODS_ACTION.SET_FILTER;
  filter: string;
}

export type GoodsActionsTypes =
  | FetchGoodsAction
  | FetchGoodsSuccessAction
  | FetchErrorAction
  | DeleteGoodsAction
  | DeleteGoodsSuccessAction
  | DeleteErrorAction
  | AddGoodsAction
  | AddGoodsSuccessAction
  | AddErrorAction
  | EditGoodsAction
  | EditGoodsSuccessAction
  | EditErrorAction
  | SetOrderTitle
  | SetFilter;
