import { ResponseGoodsData } from "../reducers/goods";
import { GoodsActionsTypes, GOODS_ACTION } from "../action_types/goods";
import { BaseGoods, FIELD_FOR_SORT_GOODS, Goods } from "../../types/goods";

export const FetchGoodsAction = (): GoodsActionsTypes => ({
  type: GOODS_ACTION.FETCH_GOODS,
});

export const FetchGoodsSuccessAction = (
  goods: ResponseGoodsData
): GoodsActionsTypes => ({
  type: GOODS_ACTION.FETCH_GOODS_SUCCESS,
  goods,
});

export const FetchGoodsErrorAction = (error: string): GoodsActionsTypes => ({
  type: GOODS_ACTION.FETCH_GOODS_ERROR,
  error,
});

//......................................................................................................//

export const DeleteGoodsAction = (id: string): GoodsActionsTypes => ({
  type: GOODS_ACTION.DELETE_GOODS,
  id,
});

export const DeleteGoodsSuccessAction = (id: string): GoodsActionsTypes => ({
  type: GOODS_ACTION.DELETE_GOODS_SUCCESS,
  id,
});

export const DeleteGoodsErrorAction = (
  error: string,
  id: string
): GoodsActionsTypes => ({
  type: GOODS_ACTION.DELETE_GOODS_ERROR,
  error,
  id,
});

//........................................................................................................//
export const AddGoodsAction = (item: BaseGoods): GoodsActionsTypes => ({
  type: GOODS_ACTION.ADD_GOODS,
  item,
});

export const AddGoodsSuccessAction = (newItem: Goods): GoodsActionsTypes => ({
  type: GOODS_ACTION.ADD_GOODS_SUCCESS,
  newItem,
});

export const AddGoodsErrorAction = (
  error: string,
  id: string
): GoodsActionsTypes => ({
  type: GOODS_ACTION.ADD_GOODS_ERROR,
  error,
});

//........................................................................................................//
export const EditGoodsAction = (editedItem: Goods): GoodsActionsTypes => ({
  type: GOODS_ACTION.EDIT_GOODS,
  editedItem,
});

export const EditGoodsSuccessAction = (
  editedItem: Goods
): GoodsActionsTypes => ({
  type: GOODS_ACTION.EDIT_GOODS_SUCCESS,
  editedItem,
});

export const EditGoodsErrorAction = (
  error: string,
  item: Goods
): GoodsActionsTypes => ({
  type: GOODS_ACTION.EDIT_GOODS_ERROR,
  error,
  item,
});

//........................................................................................................//

export const SetOrdered = (field: FIELD_FOR_SORT_GOODS): GoodsActionsTypes => ({
  type: GOODS_ACTION.SET_ORDER,
  field,
});

export const SetFilter = (filter: string): GoodsActionsTypes => ({
  type: GOODS_ACTION.SET_FILTER,
  filter,
});
