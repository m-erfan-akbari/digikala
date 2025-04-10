import type { productType } from "../product";

type urlType = {
  base: null;
  uri: string;
};

export type categoryGridType = {
  code: string;
  title: string;
  description: string;
  products: productType[];
  url: urlType;
};

export type RecommendationApiResponse = {
  status: number;
  data: {
    categories: categoryGridType[];
  };
};
