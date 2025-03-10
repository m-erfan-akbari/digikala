import { sampleSlides as sampleCarouselSlides } from "@/data/carousel";
import Carousel from "@/components/ui/Carousel";
import Services from "@/features/service/Services";
import { IncredibleOffer } from "@/features/incredible";
import IncredibleSuggestSlider from "@/features/incredible/IncredibleSuggestSlider";

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

  const incredible = data?.data?.widgets?.find(
    (w) => w.name === "incredible_offer_products_cart",
  );

  return (
    <>
      <Carousel slides={sampleCarouselSlides} />
      <Services />
      <IncredibleSuggestSlider
        incredible={incredible?.data as IncredibleOffer}
      />
    </>
  );
}
