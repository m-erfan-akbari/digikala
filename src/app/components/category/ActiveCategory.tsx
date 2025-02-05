import { categoryItems, CategoryItemType } from "@/data/category";
import { ChevronLeft } from "lucide-react";
import ActiveCategoryColumn from "./ActiveCategoryColumn";

export default function ActiveCategory({ item }: { item: CategoryItemType }) {
  const activeCategoryItems = Object.values(categoryItems[item.id] || {});

  /* Set direction to 'ltr' (left-to-right) to ensure the scrollbar appears on the right side */
  return (
    <div className="overflow-y-auto p-4" dir="ltr">
      <div dir="rtl">
        <h3 className="flex items-center gap-1 font-bold text-cyan-600">
          <span>همه محصولات {item.title}</span>
          <ChevronLeft className="h-3 w-3" />
        </h3>
        <div
          className="mt-4 grid h-[65vh] gap-4"
          style={{
            gridTemplateColumns: `repeat(${activeCategoryItems.length}, minmax(15rem, 1fr))`,
          }}
        >
          {activeCategoryItems ? (
            <>
              {activeCategoryItems.map((col, index) => (
                <ActiveCategoryColumn key={index} column={col} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
