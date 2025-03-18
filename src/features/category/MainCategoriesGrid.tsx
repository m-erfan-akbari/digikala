"use client";
import Image from "next/image";
import type { MainCategoriesDataType } from "./index";
import Slider from "@/components/ui/Slider";
import { useRef } from "react";
import SliderNavigation from "@/components/ui/SliderNavigation";

export default function MainCategoriesGrid({
  data,
}: {
  data: MainCategoriesDataType;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const categories = data?.categories;
  if (!categories) return null;

  return (
    <section className="container">
      <h4 className="my-4 text-center text-2xl">خرید براساس دسته‌بندی</h4>

      <div className="relative">
        <Slider ref={ref} className="gap-12 overflow-y-hidden">
          <SliderNavigation ref={ref} />

          <div
            className="grid gap-12"
            style={{
              gridTemplateColumns: `repeat(${Math.ceil(categories.length / 2)}, 1fr)`,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex w-max cursor-pointer flex-col items-center"
              >
                <Image
                  src={cat.image}
                  alt={`تصویر ${cat.title}`}
                  width={100}
                  height={100}
                  draggable={false}
                />

                <h6 className="text-sm">{cat.title}</h6>
              </div>
            ))}
          </div>
        </Slider>
      </div>
    </section>
  );
}
