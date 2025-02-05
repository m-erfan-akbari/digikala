import {
  ChevronDown,
  ChevronLeft,
  LogOut,
  MessageCircle,
  ShoppingBag,
  User,
} from "lucide-react";
import DropdownMenu from "../ui/DropdownMenu";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function UserMenu({
  user,
}: {
  user: KindeUser<Record<string, string>> | null;
}) {
  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger id={user.id} className="flex items-center gap-2">
        <User className="h-7 w-7 text-stone-900" />
        <ChevronDown className="h-4 w-4 text-stone-700" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Container
        id={user.id}
        className="min-w-60 translate-y-8 rounded-lg border text-base text-stone-600 drop-shadow-sm"
      >
        <Link href="/profile">
          <DropdownMenu.Item className="flex items-center justify-between">
            <span>{user.given_name}</span>
            <ChevronLeft className="h-4 w-4" />
          </DropdownMenu.Item>
        </Link>

        <Link href="/profile/orders">
          <DropdownMenu.Item className="flex items-center gap-4">
            <ShoppingBag className="h-5 w-5" />
            <span>سفارش‌ها</span>
          </DropdownMenu.Item>
        </Link>

        <Link href="/profile/comments">
          <DropdownMenu.Item className="flex items-center gap-4">
            <MessageCircle className="h-5 w-5" />
            <span>دیدگاه‌ها و پرسش‌ها</span>
          </DropdownMenu.Item>
        </Link>

        <LogoutLink>
          <DropdownMenu.Item className="flex items-center gap-4">
            <LogOut className="h-5 w-5" />
            <span>خروج از حساب کاربری</span>
          </DropdownMenu.Item>
        </LogoutLink>
      </DropdownMenu.Container>
    </DropdownMenu>
  );
}
