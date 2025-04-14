import { Fragment } from "react";
import type { productType } from "./index";
import TopProductItem from "./TopProductItem";

export default function TopProductChunk({
  productGroup,
  groupIndex,
}: {
  productGroup: productType[];
  groupIndex: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      {productGroup.map((prc, productIndex) => (
        <Fragment key={prc.id}>
          {productIndex > 0 ? <hr className="mx-10" /> : <></>}
          <TopProductItem
            product={prc}
            number={groupIndex * 3 + productIndex + 1}
          />
        </Fragment>
      ))}
    </div>
  );
}
