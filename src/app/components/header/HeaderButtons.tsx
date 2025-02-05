"use client";

import { Bell, LogOut, ShoppingCart } from "lucide-react";
import Button from "../ui/Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import UserMenu from "./UserMenu";
import Link from "next/link";
import Badge from "../ui/Badge";

export default function HeaderButtons() {
  const { getUser, isLoading, isAuthenticated } = useKindeAuth();

  const user = getUser();
  return (
    <div
      className={`flex items-center gap-4 py-2 text-sm font-bold text-stone-700`}
    >
      {!isLoading && isAuthenticated ? (
        <div className="flex gap-4 py-[7px]">
          <Link href="/profile/notification" className="relative">
            <Badge>12</Badge>
            <Bell className="h-7 w-7" />
          </Link>

          <UserMenu user={user} />
        </div>
      ) : (
        <Button.Login
          variant="outline"
          className={`flex items-center gap-2 ${isLoading ? "skeleton" : ""}`}
        >
          <LogOut className="reverse h-4 w-4" />
          ورود | ثبت‌نام
        </Button.Login>
      )}
      <div className="h-full w-[2px] bg-stone-300" />

      <Link href="/checkout/cart">
        <ShoppingCart
          className={`reverse h-6 w-6 ${isLoading ? "skeleton h-8 w-8 rounded-sm" : ""}`}
        />
      </Link>
    </div>
  );
}

export function HeaderButtonsPlaceholder() {
  return (
    <div
      className={`flex items-center gap-4 py-2 text-sm font-bold text-stone-700`}
    >
      <Button variant="outline" className={`skeleton flex items-center gap-2`}>
        <LogOut className="reverse h-4 w-4" />
        ورود | ثبت‌نام
      </Button>

      <div className="h-full w-[2px] bg-stone-300" />

      <Link href="/checkout/cart">
        <ShoppingCart className={`reverse skeleton h-8 w-8 rounded-sm`} />
      </Link>
    </div>
  );
}
