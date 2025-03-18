import Image from "next/image";
import type { ProductType } from "./index";
import Badge from "@/components/ui/Badge";

export default function FreshIncredibleOfferItem({
  product,
}: {
  product: ProductType;
}) {
  const image = product?.images?.main?.url?.at(0) || "";
  const title = product?.title_fa;
  const discount = product?.default_variant?.price?.discount_percent || 0;

  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white">
      <Image src={image} alt={`تصویر ${title}`} width={58} height={58} />

      <Badge
        className="bottom-0 rounded-full px-4 py-1 font-semibold"
        style={{ top: "initial", fontSize: "12px" }}
      >
        {discount}%
      </Badge>
    </div>
  );
}
