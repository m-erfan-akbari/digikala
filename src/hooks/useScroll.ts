"use client";

import { useEffect, useState } from "react";

type ScrollDirection = "top" | "down" | null;

export default function useScroll() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) {
        setScrollDirection("top");
      } else if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollDirection };
}
