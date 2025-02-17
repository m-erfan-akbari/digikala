"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import {
  createContext,
  HTMLProps,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";

type IdType = string | null;
type DrawerType = {
  openId: IdType;
  open: (id: string) => void;
  close: () => void;
};

const DrawerContext = createContext<DrawerType>({
  openId: null,
  open: () => {},
  close: () => {},
});

export default function Drawer({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<IdType>(null);

  function open(id: string) {
    setOpenId(id);
  }
  function close() {
    setOpenId(null);
  }

  return (
    <DrawerContext.Provider value={{ openId, open, close }}>
      {children}
    </DrawerContext.Provider>
  );
}

function Trigger({
  id,
  children,
  className,
  onClick,
  ...props
}: HTMLProps<HTMLDivElement> & { id: string }) {
  const { open } = useContext(DrawerContext);
  return (
    <div
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e);
        open(id);
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function Container({
  id,
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & { id: string }) {
  const { openId, close } = useContext(DrawerContext);
  const ref = useClickOutside<HTMLDivElement>(close);

  useEffect(() => {
    if (openId === id) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openId, id]);

  return createPortal(
    <>
      <Overlay
        className={cn(
          "z-auto",
          openId
            ? "overlay bottom-0"
            : "bottom-[initial] bg-transparent delay-500",
        )}
      />

      <div
        ref={ref}
        className={cn(
          "fixed left-0 right-0 rounded-t-2xl border bg-white p-4 transition-all ease-in-out",
          openId === id
            ? "bottom-0 duration-700"
            : "-bottom-[100dvh] duration-500",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>,
    document.body,
  );
}

export function useDrawContext() {
  const context = useContext(DrawerContext);
  if (context === undefined)
    throw new Error("DrawerContext was used outside of DrawerProvider!");

  return context;
}

Drawer.Trigger = Trigger;
Drawer.Container = Container;
