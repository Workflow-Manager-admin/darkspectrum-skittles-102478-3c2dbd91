//
// PUBLIC_INTERFACE
/**
 * Fetch list of products from FakeStore API for Scribbles clothing & accessories store.
 */
export async function fetchProducts() {
  const endpoint = "https://fakestoreapi.com/products";
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  // No extra mapping or branding; return as is
  return data;
}

/**
 * Fetch one product by ID.
 */
export async function fetchProductById(id) {
  const endpoint = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Failed to fetch product " + id);
  const prod = await res.json();
  return prod;
}
