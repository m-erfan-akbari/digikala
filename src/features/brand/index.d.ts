type BrandUrl = {
  uri: string;
};

type BrandLogo = {
  url: string[];
};

export type BrandType = {
  id: number;
  code: string;
  title_fa: string;
  title_en: string;
  url: BrandUrl;
  visibility: boolean;
  logo: BrandLogo;
  is_premium: boolean;
  is_miscellaneous: boolean;
  is_name_similar: boolean;
};

export type BrandsDataType = {
  brands: Brand[];
  title: string;
};
