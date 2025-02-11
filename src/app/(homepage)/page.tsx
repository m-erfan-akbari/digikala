import { sampleSlides } from "@/data/slider";
import Slider from "../components/ui/Slider";

export default function page() {
  return (
    <div>
      <Slider slides={sampleSlides} />
    </div>
  );
}
