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
    <>
      <div
        className={`hidden items-center gap-4 py-2 text-sm font-bold text-stone-700 lg:flex`}
      >
        {!isLoading && isAuthenticated ? (
          <div className="flex gap-4 py-[7px]">
            <Link href="/profile/notification" className="relative">
              <Badge>12</Badge>
              <Bell className="h-6 w-6 pt-[2px]" />
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

      <Link
        href="/profile/notification"
        className="relative flex h-11 w-11 items-center justify-center rounded-full bg-stone-200 lg:hidden"
      >
        <Badge className="right-2 top-2 h-3 w-3 rounded-full" />
        <Bell className="h-6 w-6 pt-[2px]" />
      </Link>
    </>
  );
}

export function HeaderButtonsPlaceholder() {
  return (
    <div
      className={`hidden items-center gap-4 py-2 text-sm font-bold text-stone-700 lg:flex`}
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
