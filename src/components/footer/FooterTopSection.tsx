import { HorizontalLogo } from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { ChevronUp } from "lucide-react";

export default function FooterTopSection() {
  return (
    <div className="flex justify-between">
      <HorizontalLogo />
      <Button
        variant={"outline"}
        className="flex items-center gap-2 text-sm text-stone-500"
      >
        بازگشت به بالا <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
