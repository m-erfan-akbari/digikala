import Image from "next/image";
import { ProductType } from "../incredible";

export default function CategorizedProductCard({
  product,
}: {
  product: ProductType;
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
