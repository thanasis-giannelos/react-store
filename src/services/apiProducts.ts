import Product from "../features/products/product";

const API_URL = "http://localhost:3004";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) throw Error("Failed getting products");

  const data = (await res.json()) as Product[];

  return data;
}

async function getProduct(productId: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${productId}`);

  if (!res.ok) throw Error("Failed getting product");

  const data = (await res.json()) as Product;

  return data;
}

export { getProducts, getProduct };
