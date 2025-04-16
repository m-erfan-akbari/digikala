"use client";

import Button from "@/components/ui/Button";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  return (
    <Button
      variant={"outline"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2 text-sm text-stone-500"
    >
      بازگشت به بالا <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
