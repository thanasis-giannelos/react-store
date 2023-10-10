import Product from "../features/products/product";

// const API_URL = "http://localhost:3004";
const API_URL = "https://dummyjson.com/products?limit=10";

async function getProducts(): Promise<Product[]> {
  // const res = await fetch(`${API_URL}/products?limit=20`);
  const res = await fetch(API_URL);

  if (!res.ok) throw Error("Failed getting products");

  // const data = (await res.json()) as Product[];
  const data = (await res.json()) as {products: Product[], total: number, skip: number, limit: number};

  const {products} = data;

  return products as Product[];
}

async function getProduct(productId: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${productId}`);

  if (!res.ok) throw Error("Failed getting product");

  const data = (await res.json()) as Product;

  return data;
}

export { getProducts, getProduct };
