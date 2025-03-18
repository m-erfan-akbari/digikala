import { sampleSlides as sampleCarouselSlides } from "@/data/carousel";
import Carousel from "@/components/ui/Carousel";
import Services from "@/features/service/Services";
import IncredibleOfferSlider from "@/features/incredible/IncredibleOfferSlider";
import BannerHomeTop from "@/features/banner/BannerHomeTop";
import FreshIncredibleOffer from "@/features/incredible/FreshIncredibleOffer";
import MainCategoriesGrid from "@/features/category/MainCategoriesGrid";
import BannerHomeMiddle from "@/features/banner/BannerHomeMiddle";

import type {
  FreshIncredibleOfferType,
  IncredibleOfferType,
} from "@/features/incredible";
import type { BannerType } from "@/features/banner";
import type { MainCategoriesDataType } from "@/features/category";

type Widget = {
  type: string;
  data?: unknown;
  endpoint?: string;
  name: string;
};

type ApiResponse = {
  status: number;
  data: {
    widgets: Widget[];
  };
};

export default async function page() {
  const res = await fetch("https://api.digikala.com/v2/", {
    next: {
      revalidate: 60, // Re-fetch and update the data every 60 seconds to ensure it stays up-to-date.
    },
  });
  const data = (await res.json()) as ApiResponse;
  const widgets = data?.data?.widgets;

  const incredible = widgets?.find(
    (w) => w.name === "incredible_offer_products_cart",
  );

  const bannerHomeTopData = widgets?.find(
    (w) => w.name === "banners_home_web_zone_top",
  );

  const freshIncredibleOffer = widgets?.find(
    (w) => w.name === "fresh_incredible_offer_products_circle",
  );

  const mainCategoriesGrid = widgets?.find(
    (w) => w.name === "main_categories_grid",
  );

  const bannerHomeMiddleData = widgets?.find(
    (w) => w.name === "banners_home_web_zone_middle",
  );

  return (
    <>
      <Carousel slides={sampleCarouselSlides} />
      <Services />
      <IncredibleOfferSlider
        incredible={incredible?.data as IncredibleOfferType}
      />

      <BannerHomeTop data={bannerHomeTopData?.data as BannerType[]} />

      <FreshIncredibleOffer
        data={freshIncredibleOffer?.data as FreshIncredibleOfferType}
      />

      <MainCategoriesGrid
        data={mainCategoriesGrid?.data as MainCategoriesDataType}
      />

      <BannerHomeMiddle data={bannerHomeMiddleData?.data as BannerType[]} />
    </>
  );
}
