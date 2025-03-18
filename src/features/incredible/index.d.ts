export type ProductType = {
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

type Variant = {
  id: number;
  lead_time: number;
  rank: number;
  rate: number;
  statistics: {
    totally_satisfied: { rate_count: number; rate: number };
    satisfied: { rate_count: number; rate: number };
    neutral: { rate_count: number; rate: number };
    dissatisfied: { rate_count: number; rate: number };
    totally_dissatisfied: { rate_count: number; rate: number };
    total_count: number;
    total_rate: number;
  } | null;
  status: string; // e.g., "marketable"
  properties: {
    is_fast_shipping: boolean;
    is_ship_by_seller: boolean;
    is_multi_warehouse: boolean;
    has_similar_variants: boolean;
    is_rural: boolean;
    in_digikala_warehouse: boolean;
    is_ship_by_seller_restricted: boolean;
  };
  digiplus: {
    services: string[];
    services_summary: string[];
    service_list: { title: string }[];
    is_jet_eligible: boolean;
    cash_back: number;
    is_general_location_jet_eligible: boolean;
    fast_shipping_text: string;
  };
  warranty: {
    id: number;
    title_fa: string;
    title_en: string;
  };
  color: {
    id: number;
    title: string;
    hex_code: string;
  };
  seller: {
    id: number;
    title: string;
    code: string;
    url: string;
    rating: {
      total_rate: number;
      total_count: number;
      commitment: number;
      no_return: number;
      on_time_shipping: number;
    };
    properties: {
      is_trusted: boolean;
      is_official: boolean;
      is_roosta: boolean;
      is_new: boolean;
    };
    stars: number;
    grade: {
      label: string; // e.g., "عالی"
      color: string; // e.g., "#00a049"
    };
    logo: null | string;
    registration_date: string; // e.g., "6 سال و 6 ماه"
  };
  digiclub: {
    point: number;
  };
  price: {
    selling_price: number;
    rrp_price: number;
    order_limit: number;
    is_incredible: boolean;
    is_promotion: boolean;
    is_locked_for_digiplus: boolean;
    bnpl_active: boolean;
    discount_percent: number;
    timer: number;
    badge: {
      title: string; // e.g., "پیشنهاد شگفت انگیز"
      color: string; // e.g., "#E6123D"
      icon: null | string;
    };
    is_digiplus_promotion: boolean;
    is_digiplus_early_access: boolean;
    is_application_incredible: boolean;
    is_lightening_deal: boolean;
    is_plus_early_access: boolean;
  };
  shipment_methods: {
    description: string;
    has_lead_time: boolean;
    providers: {
      title: string;
      description: string;
      has_lead_time: boolean;
      type: string; // e.g., "digikala", "jet"
    }[];
  };
  has_importer_price: boolean;
  manufacture_price_not_exist: boolean;
  has_best_price_in_last_month: boolean;
  buy_box_notices: unknown[];
  variant_badges: {
    id: number;
    type: string;
    slot: string;
    priority: number;
    payload: {
      text: string;
      text_color: string;
      icon: null | string;
      svg_icon: string;
    };
  }[];
};

export type IncredibleOfferType = {
  title: string; // e.g., "پیشنهاد شگفت انگیز"
  discount_percent: number;
  see_more_url: {
    base: null | string;
    uri: string;
  };
  products: Product[];
  background: null | string;
  icon: null | string;
  products_count: number;
  data_layer: null | unknown;
};

type SeeMoreUrl = {
  base: string | null;
  uri: string;
};

export type FreshIncredibleOfferType = {
  title: string;
  discount_percent: number;
  see_more_url: SeeMoreUrl;
  products: Product[];
  background: string | null;
  icon: string | null;
  products_count: number;
  data_layer: null;
};
