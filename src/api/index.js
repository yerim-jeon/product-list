export const getProducts = async () => {
  try {
    const response = await fetch('/data/productItems.json');
    return await response.json();
  } catch (error) {
    throw new Error('failed to fetch product');
  }
};
