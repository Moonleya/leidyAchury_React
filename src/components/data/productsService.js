export const getProductById = async (itemId) => {
  await wait(600);
  return products.find((p) => String(p.id) === String(itemId));
};