import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import CategorizedProductCard from "./CategorizedProductCard";
import type { categoryGridType } from "./recommendation";

export default function ProductCategoryItem({
  category,
}: {
  category: categoryGridType;
}) {
  return (
    <div className="flex flex-col gap-2 border-l p-3 last:border-l-0">
      <h6 className="font-semibold text-stone-800">{category.title}</h6>
      <p className="mb-2 text-xs text-stone-400">{category.description}</p>
      <div
        className="grid grid-cols-2 grid-rows-2 bg-stone-200"
        style={{ gap: "1px" }}
      >
        {category.products.map((product) => (
          <CategorizedProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        href="/"
        className="flex items-center justify-center text-sm text-cyan-500"
      >
        مشاهده
        <ChevronLeft className="h-4 w-4" />
      </Link>
    </div>
  );
}
