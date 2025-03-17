import Image from "next/image";
import type { MainCategoriesDataType } from "./index";

export default function MainCategoriesGrid({
  data,
}: {
  data: MainCategoriesDataType;
}) {
  return (
    <section className="container">
      <h4 className="my-4 text-center text-2xl">خرید براساس دسته‌بندی</h4>
      <div className="flex flex-wrap justify-center gap-12">
        {data.categories.map((cat) => (
          <div
            key={cat.id}
            className="flex cursor-pointer flex-col items-center"
          >
            <Image
              src={cat.image}
              alt={`تصویر ${cat.title}`}
              width={100}
              height={100}
            />

            <h6 className="text-sm">{cat.title}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}
