import Image from "next/image";
import type { BannerType } from "./index";

export default function BannerHomeTop({ data }: { data: BannerType[] }) {
  if (!data) return null;
  return (
    <section className="container flex flex-wrap justify-between gap-4">
      {data.map((banner) => (
        <div
          key={banner.id}
          className="relative basis-[calc(50%-8px)] overflow-hidden rounded-xl lg:grow lg:basis-auto"
          style={{ aspectRatio: "4 / 3" }}
        >
          <Image src={banner.webp_image} alt={`تصویر ${banner.title}`} fill />
        </div>
      ))}
    </section>
  );
}
