import { HorizontalLogo } from "../ui/Logo";
import dynamic from "next/dynamic";
import { HeaderButtonsPlaceholder } from "./HeaderButtons";
import { SearchbarPlaceholder } from "./Searchbar";

const DynamicSearchbar = dynamic(() => import("./Searchbar"), {
  // In Next.js v15.1.6, there's a bug when using ssr: false. I work around it by setting ssr: !!false.
  ssr: !!false,
  loading: () => <SearchbarPlaceholder />,
});

const DynamicHeaderButtons = dynamic(() => import("./HeaderButtons"), {
  // In Next.js v15.1.6, there's a bug when using ssr: false. I work around it by setting ssr: !!false.
  ssr: !!false,
  loading: () => <HeaderButtonsPlaceholder />,
});

const DynamicHeaderNavigation = dynamic(() => import("./HeaderNavigation"), {
  // In Next.js v15.1.6, there's a bug when using ssr: false. I work around it by setting ssr: !!false.
  ssr: !!false,
});

export default function MainHeader() {
  return (
    <header className="sticky top-0">
      <div className="bg-white">
        <div className="container flex justify-between gap-2 py-3">
          <div className="flex grow items-center gap-6">
            <HorizontalLogo className="hidden lg:block" />
            <DynamicSearchbar />
          </div>

          <DynamicHeaderButtons />
        </div>

        <DynamicHeaderNavigation />
      </div>
    </header>
  );
}
