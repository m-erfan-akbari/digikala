import FreshOfferHeader from "./FreshOfferHeader";
import FreshOfferProductList from "./FreshOfferProductList";
import type { FreshIncredibleOfferType } from "./index";

export default function FreshIncredibleOffer({
  data,
}: {
  data: FreshIncredibleOfferType;
}) {
  if (!data) return null;

  return (
    <div className="container">
      <div
        className="flex h-28 cursor-pointer justify-between rounded-xl bg-stone-300/40 px-12"
        style={{
          backgroundImage: `url("https://www.digikala.com/statics/img/svg/typography/freshPattern.svg")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <FreshOfferHeader />
        <FreshOfferProductList data={data} />
      </div>
    </div>
  );
}
