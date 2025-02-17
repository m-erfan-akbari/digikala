"use client";

import classes from "./Slider.module.css";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type sliderType = { image: string; alt: string; href: string };

export default function Slider({ slides }: { slides: sliderType[] }) {
  const [slideIndex, setSlideIndex] = useState(0);

  // Create a ref to store the interval ID
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateSlideIndex = useCallback(
    (increment: number) => {
      setSlideIndex((prevSlideIndex) => {
        const newSlideIndex = prevSlideIndex + increment;

        if (newSlideIndex < 0) {
          return slides.length - 1;
        } else if (newSlideIndex > slides.length - 1) {
          return 0;
        } else {
          return newSlideIndex;
        }
      });
    },
    [slides.length],
  );

  // Function to start the interval
  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => updateSlideIndex(1), 5000);
  }, [updateSlideIndex]);

  // Function to clear the interval
  const clearIntervalTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Reset the ref
    }
  };

  function nextSlide() {
    clearIntervalTimer();
    updateSlideIndex(1);
    startInterval();
  }

  function previousSlide() {
    clearIntervalTimer();
    updateSlideIndex(-1);
    startInterval();
  }

  function navigateToSlide(index: number) {
    clearIntervalTimer();
    setSlideIndex(index);
    startInterval();
  }

  useEffect(() => {
    startInterval();
    return () => clearIntervalTimer();
  }, [startInterval]);

  return (
    <section
      className={cn(
        "relative flex h-96 w-full overflow-x-hidden",
        classes.container,
      )}
    >
      {slides.map((image, index) => (
        <div
          key={index}
          className="absolute bottom-0 top-0 w-full transition-all duration-500 ease-in-out"
          style={{
            left: `${(slideIndex - index) * 100}%`,
          }}
        >
          <Image
            src={image.image}
            alt={`تصویر ${image.alt}`}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex w-full -translate-x-1/2 justify-center gap-1 transition-all duration-500">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSlide(index)}
            className={cn(
              "relative h-2 w-2 origin-left overflow-hidden rounded-full bg-stone-700/80",
              index === slideIndex && "w-5",
            )}
          >
            <span
              className={cn(
                "absolute bottom-0 left-0 right-[100%] top-0 transition-all duration-150",
                index === slideIndex && "right-0 bg-stone-200",
              )}
            />
          </button>
        ))}
      </div>

      <button className={cn("slider-side-btn", "left-6")} onClick={nextSlide}>
        <ChevronLeft />
      </button>

      <button
        className={cn("slider-side-btn", "right-6")}
        onClick={previousSlide}
      >
        <ChevronRight />
      </button>
    </section>
  );
}
