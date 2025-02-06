import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

export default function SearchbarContainer({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative w-full rounded-full border border-stone-200 bg-stone-200 py-2 text-stone-500 lg:w-[580px] lg:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
