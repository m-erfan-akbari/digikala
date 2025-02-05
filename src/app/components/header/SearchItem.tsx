import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SearchItem({ text }: { text: string }) {
  return (
    <Link
      href={`/search/?q=${text}`}
      className="flex items-center gap-2 rounded-full border p-2 text-sm font-bold"
    >
      <span>{text}</span>
      <ChevronLeft className="h-4 w-4" />
    </Link>
  );
}
