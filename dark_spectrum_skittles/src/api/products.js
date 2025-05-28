//
// PUBLIC_INTERFACE
/**
 * Fetch list of Skittles products from FakeStore API, adapt data as Skittles items.
 * Uses the correct /products endpoint and maps to present as Skittles products.
 */
export async function fetchProducts() {
  const endpoint = "https://fakestoreapi.com/products";
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  // Map products to "Skittles" theme - rename, etc.
  return data.map(prod => ({
    ...prod,
    title: prod.title.replace(/^[^ ]+/, "Skittles"), // e.g. replace first word with Skittles
    description: prod.description.replace(/^[^.?!]+/, "Skittles candy."), // first sentence is about Skittles
  }));
}

/**
 * Fetch one Skittles product by ID and map as Skittles.
 */
export async function fetchProductById(id) {
  const endpoint = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Failed to fetch product " + id);
  const prod = await res.json();
  return {
    ...prod,
    title: prod.title.replace(/^[^ ]+/, "Skittles"),
    description: prod.description.replace(/^[^.?!]+/, "Skittles candy."),
  };
}
