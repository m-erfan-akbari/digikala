"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { RefObject, useEffect, useState } from "react";
import NavigationButton from "./SliderNavigationButton";

export default function SliderNavigation({
  ref,
  scrollValue = 200,
  distanceToShowButton = 20,
}: {
  ref: RefObject<HTMLDivElement | null>;
  scrollValue?: number;
  distanceToShowButton?: number;
}) {
  const [buttonsVisibility, setButtonsVisibility] = useState({
    left: true,
    right: false,
  });

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", checkButtonsVisiblity);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", checkButtonsVisiblity);
      }
    };
  }, [ref]);

  function checkButtonsVisiblity(e: Event) {
    const target = e.currentTarget as HTMLDivElement;

    // Check if scroll is at the end (right side)
    if (target.scrollLeft > -distanceToShowButton) {
      setButtonsVisibility((state) => ({ ...state, right: false }));
    } else {
      setButtonsVisibility((state) => ({ ...state, right: true }));
    }

    // Check if scroll is at the end (left side)
    if (
      -target.scrollLeft + target.clientWidth + distanceToShowButton >=
      target.scrollWidth
    ) {
      setButtonsVisibility((state) => ({ ...state, left: false }));
    } else {
      setButtonsVisibility((state) => ({ ...state, left: true }));
    }
  }

  function handleScroll(distance: number) {
    const currentScrollPosition = ref.current?.scrollLeft || 0;

    ref.current?.scroll({
      left: currentScrollPosition + distance,
      behavior: "smooth",
    });
  }

  return (
    <>
      <NavigationButton
        className="left-4"
        isVisible={buttonsVisibility.left}
        Icon={ChevronLeft}
        onClick={() => handleScroll(-scrollValue)}
      />

      <NavigationButton
        className="right-4"
        isVisible={buttonsVisibility.right}
        Icon={ChevronRight}
        onClick={() => handleScroll(scrollValue)}
      />
    </>
  );
}
