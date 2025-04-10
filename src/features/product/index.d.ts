export type productType = {
  id: number;
  title_fa: string;
  title_en: string;
  url: {
    base: null | string;
    uri: string;
  };
  status: string; // e.g., "marketable"
  has_quick_view: boolean;
  data_layer: {
    brand: string;
    category: string;
    metric6: number;
    dimension2: number;
    dimension6: number;
    dimension7: string; // e.g., "incredible"
    dimension9: number;
    dimension11: number;
    dimension20: string; // e.g., "marketable"
    item_category2: string;
    item_category3: string;
    item_category4: string;
    item_category5: string;
    dimension19: string; // e.g., "incredible-products"
  };
  product_type: string; // e.g., "product"
  test_title_fa: string;
  test_title_en: string;
  digiplus: {
    services: string[];
    services_summary: string[];
    service_list: { title: string }[];
    is_jet_eligible: boolean;
    cash_back: number;
    is_general_location_jet_eligible: boolean;
    fast_shipping_text: string;
  };
  has_fresh_touchpoint: boolean;
  platforms: string[]; // e.g., ["digikala"]
  images: {
    main: {
      storage_ids: unknown[];
      url: string[];
      thumbnail_url: null | string;
      temporary_id: null | string;
      webp_url: string[];
    };
  };
  properties: {
    is_fast_shipping: boolean;
    is_ship_by_seller: boolean;
    free_shipping_badge: boolean;
    is_multi_warehouse: boolean;
    is_fake: boolean;
    has_gift: boolean;
    min_price_in_last_month: number;
    is_non_inventory: boolean;
    is_ad: boolean;
    ad: unknown[];
    is_jet_eligible: boolean;
    is_medical_supplement: boolean;
  };
  badges: unknown[];
  rating: {
    rate: number;
    count: number;
  };
  default_variant: Variant;
  second_default_variant: Variant;
};

export type orderedProductsType = {
  title: string;
  see_more_url: {
    uri: string;
  };
  products: productType[];
};
