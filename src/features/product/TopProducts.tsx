"use client";

import type { orderedProductsType } from "./index";
import Slider from "@/components/ui/Slider";
import { useRef } from "react";
import useChunkedProducts from "./useChunkedProducts";
import SliderNavigation from "@/components/ui/SliderNavigation";
import { Flame } from "lucide-react";
import Link from "next/link";
import TopProductChunk from "./TopProductChunk";

export default function TopProducts({ data }: { data: orderedProductsType }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const chunkedProducts = useChunkedProducts(data);

  if (!chunkedProducts || chunkedProducts.length < 1) return null;

  return (
    <section className="container">
      <div className="relative rounded-xl border p-2">
        <div className="relative my-4 flex justify-center">
          <h3 className="flex items-center gap-2 text-xl font-medium">
            <Flame className="text-amber-500" />
            {data?.title}
          </h3>

          <Link
            className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center text-sm font-medium text-cyan-500"
            href="/"
          >
            مشاهده همه
          </Link>
        </div>
        <Slider ref={ref}>
          <SliderNavigation ref={ref} scrollValue={350} />

          <div className="flex gap-4">
            {chunkedProducts.map((productGroup, groupIndex) => (
              <TopProductChunk
                key={groupIndex}
                productGroup={productGroup}
                groupIndex={groupIndex}
              />
            ))}
          </div>
        </Slider>
      </div>
    </section>
  );
}
