import Slider from "@/components/ui/Slider";
import React from "react";
import { IncredibleOfferType } from ".";
import IncredibleSliderItem from "./IncredibleSliderItemI";
import { ArrowLeft } from "lucide-react";

export default function IncredibleSuggestSlider({
  incredible,
}: {
  incredible: IncredibleOfferType;
}) {
  if (!incredible) {
    return (
      <h3 className="text-red-600">خطا در دریافت پیشنهاد‌های شگفت‌انگیز</h3>
    );
  }

  return (
    <Slider>
      {incredible.products.map((prc) => (
        <IncredibleSliderItem key={prc.id} prc={prc} />
      ))}

      <div className="flex w-40 cursor-pointer flex-col items-center justify-center gap-4 rounded-l-md bg-white text-stone-600">
        <ArrowLeft className="h-12 w-12 rounded-full border-2 border-cyan-500 p-2 text-cyan-500" />
        <span>مشاهده همه</span>
      </div>
    </Slider>
  );
}
