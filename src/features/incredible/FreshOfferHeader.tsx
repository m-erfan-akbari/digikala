import Image from "next/image";

export default function FreshOfferHeader() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={"https://www.digikala.com/statics/img/png/amazing/fresh.png"}
        alt="لوگو سوپرمارکت"
        width={66}
        height={62}
      />
      <Image
        src={
          "https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg"
        }
        alt="شگفت‌انگیز سوپرمارکتی"
        width={250}
        height={28}
      />
      <span className="bg-fresh-700 rounded-full px-4 py-1 text-white">
        تا 65٪ تخفیف
      </span>
    </div>
  );
}
