export type IProduct = {
  _id: string;
  name: string;
  price: number;
  size: IProductSize[];
  description: string;
  image: string;
  installments: IInstallments;
};

type IProductSize = {
  sizeName: string;
  available: boolean;
};

type IInstallments = {
  numberOfInstallments: number;
  priceOfInstallments: number;
};
