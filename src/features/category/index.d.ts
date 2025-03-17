export type CategoryType = {
  id: number;
  title: string;
  url: {
    uri: string;
  };
  image: string;
};

export type MainCategoriesDataType = {
  categories: Category[];
  title: string;
};
