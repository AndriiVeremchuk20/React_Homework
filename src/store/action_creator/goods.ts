import { Dispatch } from "react";
import {
  getGoodsListRequest,
  removeItemGoodsRequest,
  addItemGoodsRequest,
  editItemGoodsRequest,
} from "../../servises/goods";
import { GoodsActionsTypes, GOODS_ACTION } from "../action_types/goods";
import { BaseGoods, FIELD_FOR_SORT_GOODS, Goods } from "../../types/goods";

export const fetchGoodsListAction = () => {
  return async (dispatch: Dispatch<GoodsActionsTypes>) => {
    dispatch({ type: GOODS_ACTION.FETCH_GOODS });
    const response = await getGoodsListRequest();
    if (response.success) {
      setTimeout(() => {
        dispatch({
          type: GOODS_ACTION.FETCH_GOODS_SUCCESS,
          goods: response.data,
        });
      }, 1000);
    } else {
      dispatch({
        type: GOODS_ACTION.FETCH_GOODS_ERROR,
        error: response.error ?? "Errror",
      });
    }
  };
};

export const deleteFromGoodsListAction = (id: string) => {
  return async (dispatch: Dispatch<GoodsActionsTypes>) => {
    dispatch({ type: GOODS_ACTION.DELETE_GOODS, id: id });
    const response = await removeItemGoodsRequest(id);
    if (response.success) {
      setTimeout(() => {
        dispatch({
          type: GOODS_ACTION.DELETE_GOODS_SUCCESS,
          id: response.data.id,
        });
      }, 1000);
    } else {
      dispatch({
        type: GOODS_ACTION.DELETE_GOODS_ERROR,
        error: response.error ?? "Errror",
        id: id,
      });
    }
  };
};

export const addItemGoodsListAction = (item: BaseGoods) => {
  return async (dispatch: Dispatch<GoodsActionsTypes>) => {
    dispatch({ type: GOODS_ACTION.ADD_GOODS, item: item });
    const response = await addItemGoodsRequest(item);
    if (response.success) {
      setTimeout(() => {
        dispatch({
          type: GOODS_ACTION.ADD_GOODS_SUCCESS,
          newItem: response.data,
        });
      }, 1000);
    } else {
      dispatch({
        type: GOODS_ACTION.ADD_GOODS_ERROR,
        error: response.error ?? "Errror",
      });
    }
  };
};

export const editedItemGoodsListAction = (editedItem: Goods) => {
  return async (dispatch: Dispatch<GoodsActionsTypes>) => {
    dispatch({ type: GOODS_ACTION.EDIT_GOODS, editedItem: editedItem });
    const response = await editItemGoodsRequest(editedItem);
    if (response.success) {
      setTimeout(() => {
        dispatch({
          type: GOODS_ACTION.EDIT_GOODS_SUCCESS,
          editedItem: response.data,
        });
      }, 1000);
    } else {
      dispatch({
        type: GOODS_ACTION.EDIT_GOODS_ERROR,
        error: response.error ?? "Errror",
        item: editedItem,
      });
    }
  };
};

export const setOrderAction = (field: FIELD_FOR_SORT_GOODS) => {
  return (dispatch: Dispatch<GoodsActionsTypes>) => {
    dispatch({ type: GOODS_ACTION.SET_ORDER, field: field });
  };
};

export const setFilterAction = (filter: string) => {
  return (dispatch: Dispatch<GoodsActionsTypes>) => {
    dispatch({ type: GOODS_ACTION.SET_FILTER, filter: filter });
  };
};
