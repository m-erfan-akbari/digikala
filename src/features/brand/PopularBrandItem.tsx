import Image from "next/image";
import type { BrandType } from "./index";

export default function PopularBrandItem({ brand }: { brand: BrandType }) {
  return (
    <div
      className="border-l px-6 last:border-l-0"
      style={{ userSelect: "none" }}
    >
      <div className="relative" style={{ width: "110px", height: "110px" }}>
        <Image
          src={brand.logo.url.at(0)!}
          alt={`لوگو ${brand.title_fa}`}
          fill
          sizes="100%"
          draggable={false}
          className="object-contain"
        />
      </div>
    </div>
  );
}
