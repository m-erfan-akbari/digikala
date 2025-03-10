import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { ButtonHTMLAttributes, ForwardRefExoticComponent } from "react";

export default function NavigationButton({
  isVisible,
  Icon,
  className,
  ...props
}: {
  isVisible: boolean;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "absolute top-1/2 -translate-y-1/2 rounded-full border bg-white p-2 text-stone-500 shadow transition-all duration-75",
        isVisible ? "" : "scale-0",
        className,
      )}
      {...props}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
