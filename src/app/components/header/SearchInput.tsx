"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { HTMLProps } from "react";

type SearchInputType = HTMLProps<HTMLInputElement> & {
  handleOpen?: () => void;
};

export default function SearchInput({
  handleOpen = () => {},
  className,
  ...props
}: SearchInputType) {
  return (
    <div className="flex items-center gap-4" onClick={handleOpen}>
      <Search />
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="جستجو"
        className={cn(
          "w-full bg-transparent placeholder:text-stone-500 focus-visible:outline-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}
