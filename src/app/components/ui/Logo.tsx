import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLProps } from "react";

export function HorizontalLogo({
  className,
  ...props
}: HTMLProps<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("relative h-[30px] w-[195px]", className)}
      {...props}
    >
      <Image
        src="https://www.digikala.com/brand/full-horizontal.svg"
        alt="لوگو دیجی‌کالا"
        fill
      />
    </Link>
  );
}

export function TyppographyLogo({
  className,
  ...props
}: HTMLProps<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("relative h-[16px] w-[61px]", className)}
      {...props}
    >
      <Image
        src="https://www.digikala.com/brand/typography.svg"
        alt="لوگو دیجی‌کالا"
        fill
      />
    </Link>
  );
}
