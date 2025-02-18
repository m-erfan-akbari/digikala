"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import SearchInput from "./SearchInput";
import Drawer from "../ui/Drawer";
import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchbarContainer from "./SearchbarContainer";
import Overlay from "../ui/Overlay";

export default function Searchbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <Drawer>
      <SearchbarContainer>
        <div className="px-4">
          <Drawer.Trigger id="searchbar" className="lg:hidden">
            <SearchInput disabled={isOpen} handleOpen={() => setIsOpen(true)} />
          </Drawer.Trigger>
          <SearchInput
            containerProps={{ className: "hidden lg:flex" }}
            disabled={isOpen}
            handleOpen={() => setIsOpen(true)}
          />
        </div>
        {isOpen ? (
          <div className="hidden lg:block">
            <Overlay className="rigth-0 left-0 -z-10" />
            <div
              ref={ref}
              className="absolute left-0 right-0 top-0 rounded-lg border bg-white p-4 pt-3 shadow-md"
            >
              <SearchForm>
                <SearchInput handleOpen={() => setIsOpen(true)} />
              </SearchForm>
            </div>
          </div>
        ) : (
          <></>
        )}
      </SearchbarContainer>
      <Drawer.Container id="searchbar" className="h-[90dvh]">
        <SearchForm>
          <div className="rounded-full bg-stone-200 px-4 py-2">
            <SearchInput handleOpen={() => setIsOpen(true)} />
          </div>
        </SearchForm>
      </Drawer.Container>
    </Drawer>
  );
}

export function SearchbarPlaceholder() {
  return (
    <SearchbarContainer className="px-4">
      <SearchInput disabled />
    </SearchbarContainer>
  );
}
