"use client";

import Slider from "@/components/ui/Slider";
import { useRef } from "react";
import type { IncredibleOfferType } from "./index";
import IncredibleSliderItem from "./IncredibleSliderItem";
import { ArrowLeft } from "lucide-react";
import SliderHeader from "@/components/ui/SliderHeader";
import SliderNavigation from "@/components/ui/SliderNavigation";

export default function IncredibleOfferSlider({
  incredible,
}: {
  incredible: IncredibleOfferType;
}) {
  const ref = useRef<HTMLDivElement>(null);

  if (!incredible) {
    return (
      <h3 className="text-red-600">خطا در دریافت پیشنهاد‌های شگفت‌انگیز</h3>
    );
  }

  return (
    <section className="container">
      <div className="relative rounded-2xl bg-red-500 py-4">
        <Slider ref={ref}>
          <SliderHeader />
          <SliderNavigation ref={ref} />

          <div className="flex gap-1">
            {incredible.products.map((prc) => (
              <IncredibleSliderItem key={prc.id} prc={prc} />
            ))}
          </div>

          <div className="flex w-40 cursor-pointer flex-col items-center justify-center gap-4 rounded-l-md bg-white text-stone-600">
            <ArrowLeft className="h-12 w-12 rounded-full border-2 border-cyan-500 p-2 text-cyan-500" />
            <span>مشاهده همه</span>
          </div>
        </Slider>
      </div>
    </section>
  );
}
