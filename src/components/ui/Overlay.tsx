import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import { createPortal } from "react-dom";

type props = HTMLProps<HTMLDivElement> & {
  portal?: boolean; // This is a props that if it is true the overlay wraps in to createPortal function(createPortal make change in the dom hierarchy)
};

export default function Overlay({ className, portal = false }: props) {
  const OverlayElement = (
    <div
      className={cn("overlay fixed bottom-0 top-0 z-10 w-screen", className)}
    />
  );

  if (portal) {
    return createPortal(OverlayElement, document.body);
  }
  return OverlayElement;
}
