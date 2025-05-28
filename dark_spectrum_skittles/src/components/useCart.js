import React from "react";

/**
 * PUBLIC_INTERFACE
 * Custom React hook for managing the cart state, with persistence to localStorage.
 */
function useCart() {
  const STORAGE_KEY = "skittles_cart";
  const [cartItems, setCartItems] = React.useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist cart data on change
  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // PUBLIC_INTERFACE
  /** Add an item (or increment quantity if already in cart) */
  function addToCart(product, quantity = 1) {
    setCartItems(prev => {
      const idx = prev.findIndex(item => item.id === product.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + quantity };
        return updated;
      }
      return [...prev, { ...product, quantity }];
    });
  }

  // PUBLIC_INTERFACE
  /** Remove an item completely by id */
  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  // PUBLIC_INTERFACE
  /** Update quantity for an item by id */
  function updateQuantity(id, quantity) {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  }

  // PUBLIC_INTERFACE
  /** Empty cart */
  function clearCart() {
    setCartItems([]);
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}

export default useCart;
