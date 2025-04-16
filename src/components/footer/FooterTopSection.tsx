import { HorizontalLogo } from "@/components/ui/Logo";
import ScrollToTopButton from "./ScrollToTopButton";

export default function FooterTopSection() {
  return (
    <div className="flex justify-between">
      <HorizontalLogo />
      <ScrollToTopButton />
    </div>
  );
}
