import { HorizontalLogo } from "../ui/Logo";
import dynamic from "next/dynamic";
import { HeaderButtonsPlaceholder } from "./HeaderButtons";
import { SearchbarPlaceholder } from "./Searchbar";
import HeaderNavigation from "./HeaderNavigation";

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

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-10">
      <div className="bg-white">
        <div className="container-layout flex justify-between gap-2 px-4 py-3">
          <div className="flex grow items-center gap-6">
            <HorizontalLogo className="hidden lg:block" />
            <DynamicSearchbar />
          </div>

          <DynamicHeaderButtons />
        </div>

        <HeaderNavigation />
      </div>
    </header>
  );
}
