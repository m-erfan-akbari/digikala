"use client";

import classes from "./HeaderNavigation.module.css";
import { MapPin, Menu } from "lucide-react";
import NavigationMenu from "../ui/NavigationMenu";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";
import CategoryMenu from "../category/CategoryMenu";

export default function HeaderNavigation() {
  const { scrollDirection } = useScroll();

  return (
    <div className="relative -z-10 mb-10">
      <div
        className={cn(
          "absolute left-0 right-0 border-b border-b-stone-300 bg-white shadow-sm transition-all duration-150",
          scrollDirection === "down" ? "-top-10" : "top-0",
          classes.animated,
        )}
      >
        <div className="container relative flex items-center justify-between">
          <NavigationMenu className="text-sm">
            <NavigationMenu.Trigger
              id="categories-nav"
              className="flex items-center gap-2 pr-0 text-base text-stone-800"
            >
              <Menu className="h-4 w-4" />
              <span>دسته‌بندی کالاها</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Container id="categories-nav">
              <CategoryMenu />
            </NavigationMenu.Container>

            <span className="my-2 flex w-[2px] items-center rounded-full bg-stone-200" />

            {navigationItems.map((n) => (
              <NavigationMenu.Trigger
                id={n.id}
                key={n.id}
                className="flex items-center"
              >
                <Link
                  href={n.href}
                  target="_blank"
                  className="flex items-center gap-1 text-stone-500"
                >
                  <n.icon className="h-4 w-4" />
                  <span>{n.title}</span>
                </Link>
              </NavigationMenu.Trigger>
            ))}

            <span className="my-2 flex w-[2px] items-center rounded-full bg-stone-200" />

            <NavigationMenu.Trigger id="faq-nav" className="flex items-center">
              <Link
                href="https://www.digikala.com/faq/"
                target="_blank"
                className="text-stone-500"
              >
                <span>سوالی دارید؟</span>
              </Link>
            </NavigationMenu.Trigger>

            <NavigationMenu.Trigger id="sale-nav" className="flex items-center">
              <Link
                href="https://www.digikala.com/landings/seller-introduction/"
                target="_blank"
                className="text-stone-500"
              >
                <span>در دیجی‌کالا بفروشید!</span>
              </Link>
            </NavigationMenu.Trigger>
          </NavigationMenu>

          <div className="flex items-center gap-2 text-sm text-stone-700">
            <MapPin className="h-4 w-4" />
            <span>ارسال به تهران، تهران</span>
          </div>
        </div>
      </div>
    </div>
  );
}
