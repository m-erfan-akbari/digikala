import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { Clock, Flame } from "lucide-react";

import { FormEvent, HTMLProps } from "react";
import SearchSection from "./SearchSection";
import { useRouter } from "next/navigation";
import { mostPopularSearches } from "@/data/input";

export default function SearchForm({
  children,
  onSubmit,
  ...props
}: HTMLProps<HTMLFormElement>) {
  const [recentSearches, setRecentSearches] = useLocalStorageState<string[]>(
    [],
    "recent-searches",
  );

  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const search = (formData.get("search") as string) || "";
    if (!search) return;

    setRecentSearches((prevSearches) => {
      const repeatedSearchIndex = prevSearches.indexOf(search);
      if (repeatedSearchIndex > -1) {
        prevSearches.splice(repeatedSearchIndex, 1);
      }
      const updatedSearches = [search, ...prevSearches];
      return updatedSearches.slice(0, 5);
    });

    router.push(`/seach/?q=${search}`);
  }

  function handleClearSearch() {
    setRecentSearches([]);
  }

  return (
    <form
      onSubmit={(e) => {
        onSubmit?.(e);
        handleSubmit(e);
      }}
      {...props}
    >
      {children}

      {recentSearches.length > 0 ? (
        <SearchSection
          section={{
            title: "آخرین جستجو‌های شما",
            icon: Clock,
            items: recentSearches,
            handleClear: handleClearSearch,
          }}
        />
      ) : (
        <></>
      )}

      <SearchSection
        section={{
          title: "جستجو‌های پرطرفدار",
          icon: Flame,
          items: mostPopularSearches,
        }}
      />
    </form>
  );
}
