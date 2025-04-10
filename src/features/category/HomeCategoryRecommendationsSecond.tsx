import ProductCategoryGrid from "./ProductCategoryGrid";
import type { RecommendationApiResponse } from "./recommendation";

export default async function HomeCategoryRecommendationsSecond() {
  const result = await fetch(
    "https://api.digikala.com/v1/recommendation/?web_page=home",
    {
      next: {
        revalidate: 60, // Re-fetch and update the data every 60 seconds to ensure it stays up-to-date.
      },
    },
  );

  const data = (await result.json()) as RecommendationApiResponse;
  const categories = data.data.categories.filter((_, index) => index >= 4);

  return (
    <section className="container">
      <ProductCategoryGrid categories={categories} />
    </section>
  );
}
