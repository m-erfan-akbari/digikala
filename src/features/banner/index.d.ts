export type BannerType = {
  id: number;
  image: string;
  webp_image: string;
  title: string;
  is_ad: boolean;
  url: {
    base: string | null;
    uri: string;
  };
  video: string;
  description: string;
  action_title: string;
  bullet_points: string[];
  category_id: number | null;
  show_percentage: number;
  opening_type: string;
  ratio_type: string;
  display_option: string;
  hex_code: string;
  video_direct: string | null;
  is_smart_ads: boolean;
  mega_menu_id: number | null;
  zone: string;
};
