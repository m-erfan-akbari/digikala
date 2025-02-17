import { sampleSlides } from "@/data/slider";
import Slider from "@/components/ui/Slider";
import Services from "@/features/service/Services";

export default function page() {
  return (
    <>
      <Slider slides={sampleSlides} />
      <Services />
    </>
  );
}
