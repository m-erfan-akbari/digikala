import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SliderTimer from "./SliderTimer";

export default function SliderHeader() {
  return (
    <div className="flex flex-col gap-3 px-6 py-4">
      <Image
        src="https://digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
        alt="لوگو پیشنهاد شگفت انگیز"
        width={88}
        height={88}
        draggable="false"
      />

      <SliderTimer />

      <Image
        src="https://digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
        alt="لوگو درصد تخفیف"
        height={80}
        width={80}
        draggable="false"
      />

      <Link
        href={"/"}
        className="flex items-center text-xs font-bold text-white"
      >
        <span>مشاهده همه</span>
        <ChevronLeft className="h-4 w-4" />
      </Link>
    </div>
  );
}
