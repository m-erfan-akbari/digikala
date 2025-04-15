import Link from "next/link";
import { type digiBrandtype } from "./data";
import Image from "next/image";
import { Fragment } from "react";

export default function FooterDigiBrandSection({
  brands,
}: {
  brands: digiBrandtype[];
}) {
  return (
    <div className="relative flex justify-evenly bg-stone-200">
      {brands.map((brand, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <div className="bg-stone-300" style={{ width: "1px" }}>
              &nbsp;
            </div>
          )}
          <Link href={brand.url} className="flex flex-1 justify-center py-8">
            <Image
              src={brand.image}
              alt=""
              height={0}
              width={0}
              style={{ height: "20px", width: "auto" }}
            />
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
