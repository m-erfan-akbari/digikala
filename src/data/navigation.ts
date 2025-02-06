import {
  BriefcaseBusiness,
  CirclePercent,
  Flame,
  LucideProps,
  ShoppingBasket,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type NavigationItem = {
  id: string;
  href: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const navigationItems: NavigationItem[] = [
  {
    id: "wonderful-nav",
    title: "شگفت‌انگیزها",
    icon: CirclePercent,
    href: "https://www.digikala.com/incredible-offers",
  },
  {
    id: "supermarket-nav",
    title: "سوپرمارکت",
    icon: ShoppingBasket,
    href: "https://www.digikala.com/fresh/",
  },
  {
    id: "gold-nav",
    title: "طلای دیجیتال",
    icon: BriefcaseBusiness,
    href: "https://www.digikala.com/gold/welcome/",
  },
  {
    id: "bestseller-nav",
    title: "پرفروش‌ترین‌ها",
    icon: Flame,
    href: "https://www.digikala.com/best-selling/",
  },
];
