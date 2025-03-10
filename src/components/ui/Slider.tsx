"use client";

import SliderHeader from "./SliderHeader";
import { MouseEvent, ReactNode, useRef, useState } from "react";
import SliderNavigation from "./SliderNavigation";

export default function Slider({ children }: { children: ReactNode }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);

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
    <section className="container">
      <div className="relative rounded-2xl bg-red-500 py-4">
        <div
          className="flex overflow-x-hidden px-4 transition-all"
          ref={ref}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ userSelect: "none" }}
        >
          <SliderHeader />
          <SliderNavigation ref={ref} />

          <div className="flex gap-1 transition-all">{children}</div>
        </div>
      </div>
    </section>
  );
}
