import Image from "next/image";

export default function FreshOfferHeader() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={"https://www.digikala.com/statics/img/png/amazing/fresh.png"}
        alt="لوگو سوپرمارکت"
        width={0}
        height={0}
        style={{ width: "66px", height: "auto" }}
      />
      <Image
        src={
          "https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg"
        }
        alt="شگفت‌انگیز سوپرمارکتی"
        width={0}
        height={0}
        style={{ width: "250px", height: "auto" }}
      />
      <span className="rounded-full bg-fresh-700 px-4 py-1 text-white">
        تا 65٪ تخفیف
      </span>
    </div>
  );
}
