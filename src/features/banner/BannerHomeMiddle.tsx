import Image from "next/image";
import type { BannerType } from "./index";

export default function BannerHomeMiddle({ data }: { data: BannerType[] }) {
  if (!data) return <></>;

  return (
    <section className="container">
      <div className="flex gap-4">
        {data.map((banner) => (
          <div
            key={banner.id}
            className="relative grow overflow-hidden rounded-xl"
            style={{ aspectRatio: "25 / 10" }}
          >
            <Image src={banner.webp_image} alt={`تصویر ${banner.title}`} fill />
          </div>
        ))}
      </div>
    </section>
  );
}
