import { CategoryColumnType } from "@/data/category";
import { ChevronLeft } from "lucide-react";
import { Fragment } from "react";

export default function ActiveCategoryColumn({
  column,
}: {
  column: CategoryColumnType[];
}) {
  return (
    <div className="">
      {column.map((col, index) => (
        <Fragment key={index}>
          <h6 className="my-2 flex items-center gap-1 border-r-2 border-r-red-600 px-2 font-bold text-stone-800">
            {col.title}
            <ChevronLeft className="h-3 w-3" />
          </h6>
          {col.items.map((item, itemIndex) => (
            <span
              key={itemIndex}
              className="block py-2 font-light text-stone-500"
            >
              {item}
            </span>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
