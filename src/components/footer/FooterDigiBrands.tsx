import { digiBrandsFirst, digiBrandsSecond } from "./data";
import FooterDigiBrandSection from "./FooterDigiBrandSection";

export default function FooterDigiBrands() {
  return (
    <div>
      <FooterDigiBrandSection brands={digiBrandsFirst} />
      <hr className="border-stone-300" />
      <FooterDigiBrandSection brands={digiBrandsSecond} />
    </div>
  );
}
