import { BaseGoods, Goods } from "../types/goods";

export const baseUrl = "http://127.0.0.1:8080";

const commonHeaders = {
  "Content-Type": "application/json",
};

export const performRequest = async (
  path: string,
  method: string = "GET",
  body: BaseGoods | undefined | Goods = undefined
) => {
  try {
    const bodyString = body ? JSON.stringify(body) : undefined;
    const response = await fetch([baseUrl, path].join("/"), {
      method,
      headers: commonHeaders,
      body: bodyString,
    });

    if (response.ok) {
      const responseJson = await response.json();
      return { success: true, data: responseJson };
    } else {
      return { success: false, error: "Something Went Wrong" };
    }
  } catch (error) {
    return { success: false, error: "Something Went Wrong" };
  }
};

export const getGoodsListRequest = () => {
  return performRequest("goods", "GET");
};

export const removeItemGoodsRequest = (id: string) => {
  return performRequest("goods/" + id, "DELETE");
};

export const addItemGoodsRequest = (item: BaseGoods) => {
  return performRequest("goods", "POST", item);
};

export const editItemGoodsRequest = (item: Goods) => {
  return performRequest("goods/" + item.id, "PUT", item);
};
