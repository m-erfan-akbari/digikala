import Image from "next/image";
import Link from "next/link";

export default function HorizontalLogo() {
  return (
    <Link href="/" className="relative h-[30px] w-[195px]">
      <Image
        src="https://www.digikala.com/brand/full-horizontal.svg"
        alt="لوگو دیجی‌کالا"
        fill
      />
    </Link>
  );
}
