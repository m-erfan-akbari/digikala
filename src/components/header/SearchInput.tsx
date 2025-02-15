"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { HTMLProps, useState } from "react";
import { TyppographyLogo } from "../ui/Logo";

type SearchInputType = HTMLProps<HTMLInputElement> & {
  handleOpen?: () => void;
  containerProps?: HTMLProps<HTMLDivElement>;
};

export default function SearchInput({
  handleOpen = () => {},
  className,
  containerProps = {},
  ...props
}: SearchInputType) {
  const [search, setSearch] = useState("");
  const {
    className: containerClassName,
    onClick,
    ...otherProps
  } = containerProps;
  return (
    <div
      className={cn("relative flex items-center gap-4", containerClassName)}
      onClick={(e) => {
        onClick?.(e);
        handleOpen();
      }}
      {...otherProps}
    >
      <Search className="text-stone-500" />
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder={"جستجو"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={cn(
          "w-full bg-transparent placeholder:text-stone-500 focus-visible:outline-none",
          className,
        )}
        {...props}
      />
      {search === "" ? (
        <TyppographyLogo className="absolute right-28 top-1/2 flex -translate-y-1/2 items-center before:-mr-5 before:text-stone-500 before:content-['در'] lg:hidden" />
      ) : (
        <></>
      )}
    </div>
  );
}
