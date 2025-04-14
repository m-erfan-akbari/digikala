import Image from "next/image";
import type { productType } from ".";

export default function TopProductItem({
  product,
  number,
}: {
  product: productType;
  number: number;
}) {
  return (
    <div
      className="flex items-center gap-4 p-1"
      style={{ width: "315px", userSelect: "none" }}
    >
      <Image
        src={product.images.main.webp_url.at(0)!}
        alt={`تصویر ${product.title_fa}`}
        width={86}
        height={86}
        draggable={false}
      />

      <span className="text-3xl font-bold text-cyan-500">{number}</span>
      <h5 className="line-clamp-2 text-sm text-stone-600">
        {product.title_fa}
      </h5>
    </div>
  );
}
