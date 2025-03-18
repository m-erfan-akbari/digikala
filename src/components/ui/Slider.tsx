"use client";

import { cn } from "@/lib/utils";
import { HTMLProps, MouseEvent, RefObject, useState } from "react";

export default function Slider({
  ref,
  style,
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & {
  ref: RefObject<HTMLDivElement | null>;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  function handleMouseDown(e: MouseEvent) {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    } else {
      setIsDragging(false);
    }
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(e: MouseEvent) {
    if (isDragging) {
      const currentScrollPosition = e.currentTarget.scrollLeft;
      const deltaX = e.clientX - dragStart.x;

      e.currentTarget.scroll({
        left: currentScrollPosition - deltaX * 0.075,
      });
    }
  }

  return (
    <div
      ref={ref}
      style={{ userSelect: "none", ...style }}
      className={cn("flex overflow-x-hidden px-4 transition-all", className)}
      {...props}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
