export function getCategoriesFromProducts(products) {
  const categories = products.map((item) => item.productCollection);
  return ['All', ...new Set(categories)];
}

export function getProductsFromCategory(products, category) {
  const newProducts = products.filter(
    (item) => item.productCollection === category,
  );
  return newProducts;
}
