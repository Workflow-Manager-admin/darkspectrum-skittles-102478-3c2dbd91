//
// PUBLIC_INTERFACE
/**
 * Fetch list of Skittles products from fake API.
 * Replace the URL below with your products API endpoint.
 */
export async function fetchProducts() {
  const endpoint = "https://fakestoreapi.com/products/category/candy";
  // TODO: use actual Skittles endpoint, or mock response if needed
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

/**
 * Fetch one Skittles product by ID.
 */
export async function fetchProductById(id) {
  const endpoint = `https://fakestoreapi.com/products/${id}`;
  // TODO: use actual endpoint for Skittles or adjust as needed
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Failed to fetch product " + id);
  return await res.json();
}
