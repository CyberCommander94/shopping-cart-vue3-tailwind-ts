export interface ICategoryItem {
  id: string;
  categoryName: string;
  categoryBg: string;
  categoryGoods: IProduct[]
};

export interface IProduct {
  id: string;
  name: string;
  path: string;
  cost: number;
}

export interface ICartItem  {
  id: string,
  name: string,
  amount: number,
  cost: number
}
