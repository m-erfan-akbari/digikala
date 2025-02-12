"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import {
  ButtonHTMLAttributes,
  createContext,
  Dispatch,
  HTMLProps,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type IdType = string | null;

type MenuContextType = {
  openId: IdType;
  setOpenId: Dispatch<SetStateAction<IdType>>;
  close: () => void;
};

const MenuContext = createContext<MenuContextType>({
  openId: "",
  setOpenId: () => null,
  close: () => {},
});

export default function DropdownMenu({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<IdType>(null);
  const close = () => setOpenId(null);

  return (
    <MenuContext.Provider value={{ openId, setOpenId, close }}>
      <div className="relative">{children}</div>
    </MenuContext.Provider>
  );
}

function Trigger({
  id,
  onClick,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  id: string;
}) {
  const { setOpenId } = useContext(MenuContext);
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    onClick?.(e);
    setOpenId(id);
  }

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}

function Container({
  id,
  children,
  className,
  ...props
}: HTMLProps<HTMLUListElement> & { id: IdType }) {
  const { openId, close } = useContext(MenuContext);

  const ref = useClickOutside<HTMLUListElement>(close, false);

  if (id !== openId) return null;

  return (
    <ul
      ref={ref}
      className={cn(
        "absolute left-0 top-0 z-10 overflow-hidden bg-white shadow-md [&_div]:border-b",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

function Item({ children, className, ...props }: HTMLProps<HTMLLIElement>) {
  return (
    <li
      className={cn(
        "cursor-pointer p-4 transition-colors duration-200 ease-in-out hover:bg-stone-100",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}

DropdownMenu.Trigger = Trigger;
DropdownMenu.Container = Container;
DropdownMenu.Item = Item;
