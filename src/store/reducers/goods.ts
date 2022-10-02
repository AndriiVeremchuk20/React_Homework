import { FIELD_FOR_SORT_GOODS, Goods } from "../../types/goods";
import { GoodsActionsTypes, GOODS_ACTION } from "../action_types/goods";

export interface itemStatus {
  [key: string]: boolean;
}

export interface ResponseGoodsData {
  goods: Goods[];
}

export interface GoodsState {
  data: ResponseGoodsData;
  loading: boolean;
  error: null | string;
  isDataAdding: boolean;
  isDeleted?: itemStatus;
  isUpdating: boolean;
  filter: string;
  order: FIELD_FOR_SORT_GOODS;
}

const initialState: GoodsState = {
  data: {
    goods: [],
  },
  error: null,
  loading: true,
  isDataAdding: false,
  isDeleted: undefined,
  isUpdating: false,
  filter: "",
  order: FIELD_FOR_SORT_GOODS.NONE,
};

export const goodsReducer = (
  state = initialState,
  action: GoodsActionsTypes
): GoodsState => {
  switch (action.type) {
    case GOODS_ACTION.FETCH_GOODS:
      return {
        ...state,
        loading: true,
      };

    case GOODS_ACTION.FETCH_GOODS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.goods,
      };

    case GOODS_ACTION.FETCH_GOODS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    //.............................................................................................................//
    case GOODS_ACTION.DELETE_GOODS:
      return {
        ...state,
        isDeleted: {
          ...state.isDeleted,
          [action.id]: true,
        },
      };
    case GOODS_ACTION.DELETE_GOODS_SUCCESS:
      return {
        ...state,
        data: {
          goods: state.data.goods.filter((item) => item.id !== action.id),
        },
        isDeleted: {
          ...state.isDeleted,
          [action.id]: false,
        },
      };
    case GOODS_ACTION.DELETE_GOODS_ERROR:
      return {
        ...state,
        isDeleted: {
          ...state.isDeleted,
          [action.id]: false,
        },
        error: action.error,
      };

    //.............................................................................................................//
    case GOODS_ACTION.ADD_GOODS:
      return {
        ...state,
        isDataAdding: true,
      };

    case GOODS_ACTION.ADD_GOODS_SUCCESS:
      return {
        ...state,
        data: {
          goods: [action.newItem, ...state.data.goods],
        },
        isDataAdding: false,
      };

    case GOODS_ACTION.ADD_GOODS_ERROR:
      return {
        ...state,
        isDataAdding: false,
        error: action.error,
      };
    //.............................................................................................................//

    case GOODS_ACTION.EDIT_GOODS:
      return {
        ...state,
        isUpdating: true,
      };

    case GOODS_ACTION.EDIT_GOODS_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        data: {
          goods: state.data.goods.map((item) => {
            if (item.id === action.editedItem.id) {
              return action.editedItem;
            }
            return item;
          }),
        },
      };

    case GOODS_ACTION.EDIT_GOODS_ERROR:
      return {
        ...state,
        isUpdating: false,
        data: {
          goods: state.data.goods.map((item) => {
            if (item.id === action.item.id) {
              return item;
            }
            return item;
          }),
        },
        error: action.error,
      };
    //.............................................................................................................//

    case GOODS_ACTION.SET_ORDER:
      return {
        ...state,
        order: action.field,
      };

    case GOODS_ACTION.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};
