import { ArrowLeft } from "lucide-react";
import type { FreshIncredibleOfferType } from "./index";
import FreshIncredibleOfferItem from "./FreshIncredibleOfferItem";

export default function FreshOfferProductList({
  data,
}: {
  data: FreshIncredibleOfferType;
}) {
  return (
    <div className="flex items-center gap-2">
      {data.products.map((prc) => (
        <FreshIncredibleOfferItem key={prc.id} product={prc} />
      ))}
      <span className="flex items-center rounded-full bg-white px-4 py-3 text-fresh-700">
        بیش از 100 کالا <ArrowLeft className="h-5 w-5" />
      </span>
    </div>
  );
}
