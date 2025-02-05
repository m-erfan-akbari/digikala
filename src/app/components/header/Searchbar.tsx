"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { Clock, Flame } from "lucide-react";

import { FormEvent, useState } from "react";
import SearchSection from "./SearchSection";
import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";
import { mostPopularSearches } from "@/data/input";

export default function Searchbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useLocalStorageState<string[]>(
    [],
    "recent-searches",
  );
  const ref = useClickOutside<HTMLFormElement>(() => setIsOpen(false));
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
    <>
      {isOpen ? (
        <div className="overlay fixed bottom-0 left-0 right-0 top-[118px]" />
      ) : (
        <></>
      )}
      <div className="relative w-[580px] rounded-lg border border-stone-200 bg-stone-200 py-2 text-stone-500">
        <div className="px-4">
          <SearchInput handleOpen={() => setIsOpen(true)} />
        </div>
        {isOpen ? (
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="absolute left-0 right-0 top-0 rounded-lg border bg-white p-4 pt-3 shadow-md"
          >
            <SearchInput handleOpen={() => setIsOpen(true)} />

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
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export function SearchbarPlaceholder() {
  return (
    <div className="relative w-[580px] rounded-lg border border-stone-200 bg-stone-200 px-4 py-2 text-stone-500">
      <SearchInput disabled />
    </div>
  );
}
