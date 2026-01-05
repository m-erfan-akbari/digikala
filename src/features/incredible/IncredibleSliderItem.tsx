import Badge from "@/components/ui/Badge";
import Image from "next/image";
import type { productType } from "../product";
import { formatNumberWithCommas } from "@/lib/number";

export default function IncredibleSliderItem({ prc }: { prc: productType }) {
  const title = prc.title_fa;
  const image = prc.images.main.url.at(0)!;
  const status = prc.status;

  const { discount_percent, selling_price, rrp_price } = prc.default_variant
    ?.price || {
    discount_percent: 0,
    selling_price: 0,
    rrp_price: 0,
  };

  return (
    <div
      className="grid w-40 shrink-0 cursor-pointer gap-x-1 bg-white p-2 text-sm text-stone-500 first:rounded-r-md"
      style={{
        gridTemplateColumns: "auto 1fr auto",
      }}
    >
      <Image
        src={image}
        width={120}
        height={120}
        alt={`تصویر ${title}`}
        className="col-span-3 mx-auto"
        draggable="false"
      />
      <h4 className="col-span-3 my-3 line-clamp-2">{title}</h4>

      {status === "out_of_stock" ? (
        <>
          <span className="col-start-2 text-left">ناموجود</span>
          <span className="col-start-2">&nbsp;</span>
        </>
      ) : (
        <>
          {discount_percent > 0 ? (
            <Badge
              className="static rounded-full px-4 font-bold"
              style={{ fontSize: "11px" }}
            >
              {discount_percent}%
            </Badge>
          ) : (
            <span></span>
          )}
          <span className="text-left font-bold text-stone-600">
            {formatNumberWithCommas(selling_price / 10)}
          </span>
          <Image
            src="/icon/toman.png"
            alt="آیکون تومان"
            className="opacity-90"
            width={16}
            height={16}
            title="Toman by Fiction on IconScout"
            draggable="false"
          />

          {discount_percent > 0 ? (
            <span className="col-span-2 text-left text-stone-400/80 line-through">
              {formatNumberWithCommas(rrp_price / 10)}
            </span>
          ) : (
            <span>&nbsp;</span>
          )}
        </>
      )}
    </div>
  );
}
