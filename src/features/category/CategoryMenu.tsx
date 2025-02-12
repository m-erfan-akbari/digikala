"use client";
import { categories, CategoryItemType } from "@/data/category";
import CategoryMenuItem from "./CategoryMenuItem";
import ActiveCategory from "./ActiveCategory";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export default function CategoryMenu() {
  const [currentCategory, setCurrentCategory] =
    useLocalStorageState<CategoryItemType | null>(
      categories[0],
      "active-category",
    );

  return (
    <div className="flex">
      <ul className="bg-stone-100">
        {categories.map((item) => (
          <CategoryMenuItem
            key={item.id}
            item={item}
            isActive={item.id === currentCategory?.id}
            onHover={() => setCurrentCategory(item)}
          />
        ))}
      </ul>
      {currentCategory ? <ActiveCategory item={currentCategory} /> : <></>}
    </div>
  );
}
