import Image from "next/image";
import type { productType } from "../product";

export default function CategorizedProductCard({
  product,
}: {
  product: productType;
}) {
  return (
    <div className="bg-white p-2" key={product.id}>
      <div className="relative" style={{ minWidth: "120px", height: "120px" }}>
        <Image
          src={product.images.main.webp_url.at(0)!}
          alt={`تصویر ${product.title_fa}`}
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>
    </div>
  );
}
