import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeType = HTMLAttributes<HTMLSpanElement> & {
  variant?: "primary";
  size?: "sm";
};

export default function Badge({
  variant = "primary",
  size = "sm",
  children,
  className,
  ...props
}: BadgeType) {
  const variants = {
    primary: "bg-red-500",
  };
  const sizes = {
    sm: "-right-1 -top-2 h-5 w-5  rounded-md text-[0.6rem]",
  };

  return (
    <span
      className={cn(
        "absolute flex items-center justify-center border border-white text-stone-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
