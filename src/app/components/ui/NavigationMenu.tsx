"use client";

import { cn } from "@/lib/utils";
import {
  createContext,
  HTMLProps,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

type IdType = string | null;
type UnderlinePositionType = {
  top: string;
  left: string;
  width: string;
};

type MenuContextType = {
  openId: IdType;
  handleChange: (e?: MouseEvent<HTMLElement>, id?: string) => void;
};

const MenuContext = createContext<MenuContextType>({
  openId: "",
  handleChange: () => {},
});

export default function NavigationMenu({
  children,
  className,
  ...props
}: HTMLProps<HTMLElement>) {
  const [hover, setHover] = useState<IdType>("categories-nav");
  const [underlinePosition, setUnderlindePosition] =
    useState<UnderlinePositionType>({
      top: "110px",
      left: "100%",
      width: "0px",
    });

  function getPosition(e?: MouseEvent<HTMLElement>): UnderlinePositionType {
    if (!e) return underlinePosition;
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      width: `${rect.width}px`,
      top: `${rect.bottom - 2}px`,
      left: `${rect.left}px`,
    };
  }

  function handleChange(e?: MouseEvent<HTMLElement>, id: string | null = null) {
    let newPosition = { ...getPosition(e) };

    if (id === null) {
      newPosition = { ...newPosition, width: "0px", left: `${e?.clientX}px` };
    }

    setUnderlindePosition(newPosition);
    setHover(id);
  }

  const { top, left, width } = underlinePosition;

  return (
    <MenuContext.Provider value={{ openId: hover, handleChange }}>
      <nav className={className} {...props}>
        <div
          className="fixed z-0 h-[3px] rounded-full bg-red-500 transition-all duration-300"
          style={{
            top,
            left,
            width,
          }}
        />
        <ul className="flex">{children}</ul>
      </nav>
    </MenuContext.Provider>
  );
}

function Trigger({
  id,
  children,
  className,
  ...props
}: HTMLProps<HTMLLIElement> & { id: string }) {
  const { handleChange } = useContext(MenuContext);
  return (
    <li
      className={cn(
        "relative cursor-pointer px-3 py-2 text-stone-600",
        className,
      )}
      onMouseMove={(e) => handleChange(e, id)}
      onMouseLeave={(e) => handleChange(e)}
      {...props}
    >
      <div
        className="absolute -bottom-2 h-4 w-full"
        onMouseMove={(e) => handleChange(e, id)}
        onMouseLeave={(e) => handleChange(e)}
      />
      {children}
    </li>
  );
}

function Container({
  id,
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const { openId, handleChange } = useContext(MenuContext);

  useEffect(() => {
    if (openId === id) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openId, id]);

  if (openId !== id) return null;

  return (
    <>
      <div
        className={cn(
          "absolute right-0 top-10 rounded-b-md border border-t-0 border-stone-300 bg-white p-1 drop-shadow-lg",
          className,
        )}
        {...props}
        onMouseEnter={() => handleChange(undefined, id)}
        onMouseLeave={() => handleChange()}
      >
        {children}
      </div>
      {createPortal(
        <div className="overlay fixed bottom-0 top-0 -z-10 w-screen" />,
        document.body,
      )}
    </>
  );
}

NavigationMenu.Trigger = Trigger;
NavigationMenu.Container = Container;
