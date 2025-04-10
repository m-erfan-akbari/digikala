import { ProductType } from "../incredible";

type urlType = {
  base: null;
  uri: string;
};

export type categoryGridType = {
  code: string;
  title: string;
  description: string;
  products: ProductType[];
  url: urlType;
};

export type RecommendationApiResponse = {
  status: number;
  data: {
    categories: categoryGridType[];
  };
};
