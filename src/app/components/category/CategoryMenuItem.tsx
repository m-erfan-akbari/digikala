import { CategoryItemType } from "@/data/category";
import { cn } from "@/lib/utils";

export default function CategoryMenuItem({
  item,
  onHover,
  isActive,
}: {
  item: CategoryItemType;
  isActive: boolean;
  onHover: () => void;
}) {
  const { title, icon: Icon } = item;
  return (
    <li
      className={cn(
        "flex items-center gap-2 p-3 text-stone-700 hover:bg-white hover:text-red-500",
        isActive && "bg-white text-red-500",
      )}
      onMouseMove={onHover}
    >
      <Icon className="h-5 w-5" />
      <span className="whitespace-nowrap break-keep">{title}</span>
    </li>
  );
}
