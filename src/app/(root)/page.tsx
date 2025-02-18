import { sampleSlides } from "@/data/carousel";
import Carousel from "@/components/ui/Carousel";
import Services from "@/features/service/Services";

export default function page() {
  return (
    <>
      <Carousel slides={sampleSlides} />
      <Services />
    </>
  );
}
