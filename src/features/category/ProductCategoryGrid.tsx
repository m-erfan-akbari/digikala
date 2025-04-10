import { categoryGridType } from "./recommendation";
import ProductCategoryItem from "./ProductCategoryItem";

export default function ProductCategoryGrid({
  categories,
}: {
  categories: categoryGridType[];
}) {
  return (
    <div className="grid grid-cols-4 rounded-xl border">
      {categories.map((category) => (
        <ProductCategoryItem key={category.code} category={category} />
      ))}
    </div>
  );
}
