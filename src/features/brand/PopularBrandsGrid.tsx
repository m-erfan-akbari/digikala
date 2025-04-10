"use client";

import { Star } from "lucide-react";
import Slider from "@/components/ui/Slider";

import type { BrandsDataType } from "./index";
import { useRef } from "react";
import SliderNavigation from "@/components/ui/SliderNavigation";
import PopularBrandItem from "./PopularBrandItem";

export default function PopularBrandsGrid({ data }: { data: BrandsDataType }) {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <section className="container">
      <div className="flex flex-col gap-6 rounded-xl border py-8">
        <h4 className="flex items-center justify-center gap-1 text-center text-2xl">
          <Star className="text-yellow-500" />
          {data.title}
        </h4>

        <div className="relative">
          <Slider ref={ref}>
            <div className="flex">
              {data.brands.map((brand) => (
                <PopularBrandItem key={brand.id} brand={brand} />
              ))}
            </div>
            <SliderNavigation ref={ref} />
          </Slider>
        </div>
      </div>
    </section>
  );
}
