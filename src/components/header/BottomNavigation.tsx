import { cn } from "@/lib/utils";
import {
  Home,
  LayoutGrid,
  LucideProps,
  Magnet,
  ShoppingBasket,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type bottomNavigationType = {
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
};

const bottomNavigations: bottomNavigationType[] = [
  { title: "خانه", icon: Home, href: "/" },
  { title: "دسته‌بندی", icon: LayoutGrid, href: "/categories" },
  { title: "سبد خرید", icon: ShoppingBasket, href: "/checkout/cart" },
  { title: "مگنت", icon: Magnet, href: "/magnet/feed" },
  { title: "دیجی‌کالای من", icon: UserRound, href: "/profile" },
];
export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 border-t border-t-stone-300 lg:hidden"
      style={{ boxShadow: "0 0 2px 0 #ddd" }}
    >
      <ul className="flex justify-evenly bg-white py-2 text-stone-600">
        {bottomNavigations.map((item) => (
          <BottomNavigationItem
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
      </ul>
    </nav>
  );
}

function BottomNavigationItem({
  item,
  isActive,
}: {
  item: bottomNavigationType;
  isActive: boolean;
}) {
  const { title, icon: Icon, href } = item;
  return (
    <li>
      <Link
        className={cn(
          "flex flex-col items-center justify-center",
          isActive && "text-red-600",
        )}
        href={href}
      >
        <Icon className="h-4 w-4" />
        <span style={{ fontSize: "0.5rem" }}>{title}</span>
      </Link>
    </li>
  );
}
