import { LucideProps, Trash2 } from "lucide-react";
import { ForwardRefExoticComponent, HTMLProps, RefAttributes } from "react";
import SearchItem from "./SearchItem";

type SectionType = {
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  items: string[];
  handleClear?: () => void;
};

export default function SearchSection({
  section,
  ...props
}: {
  section: SectionType & HTMLProps<HTMLDivElement>;
}) {
  const { title, icon: Icon, items, handleClear } = section;
  return (
    <div className="flex flex-col gap-2" {...props}>
      <div className="mt-4 flex items-center gap-4 text-base font-bold text-stone-600">
        <Icon className="h-6 w-6 text-stone-400" />
        <h3>{title}</h3>
        {handleClear ? (
          <Trash2
            className="mr-auto h-5 w-5 cursor-pointer text-stone-400"
            onClick={handleClear}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((text, index) => (
          <SearchItem key={index} text={text} />
        ))}
      </div>
    </div>
  );
}
