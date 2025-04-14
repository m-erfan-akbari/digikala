import { useState, useEffect } from "react";
import type { productType } from "./index";

// Helper function to split an array into smaller chunks
const divideArrayIntoChunks = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const useChunkedProducts = (productData: {
  products: productType[] | undefined;
}) => {
  const [chunkedProducts, setChunkedProducts] = useState<productType[][]>([]);
  const allProducts = productData.products;

  useEffect(() => {
    // Ensure the product list is a valid array before processing
    if (Array.isArray(allProducts)) {
      // Divide the product list into chunks of 3
      const groupedProducts = divideArrayIntoChunks(allProducts, 3);
      setChunkedProducts(groupedProducts); // Update state once with the computed data
    } else {
      setChunkedProducts([]); // Reset state if the product list is invalid
    }
  }, [allProducts]);

  return chunkedProducts;
};

export default useChunkedProducts;
