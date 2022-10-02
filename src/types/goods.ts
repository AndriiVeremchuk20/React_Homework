export interface BaseGoods {
  title: string;
  weight: string;
  description: string;
  category: string;
}

export interface Goods extends BaseGoods {
  id: string;
}

export enum FIELD_FOR_SORT_GOODS {
  TITLE,
  WEIGHT,
  DESCRIPTION,
  NONE,
}

/*
{ 
    "id": "2d6ae617-4fba-422f-8194-2042d6e67240", 
    "title": "Milk", 
    "weight": "1.5", 
    "description": "For kids", 
    "category": "" 
}
*/
