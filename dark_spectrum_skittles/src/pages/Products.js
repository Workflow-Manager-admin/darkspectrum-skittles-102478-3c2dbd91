import React from "react";
import theme from "../theme";

// PUBLIC_INTERFACE
/**
 * Placeholder for the product list page - pulls in product API (TODO) and shows product cards.
 */
function Products() {
  // API integration to fetch products will be added
  return (
    <div className="page products" style={{
      minHeight: "70vh",
      paddingTop: 120,
      color: theme.colors.textPrimary
    }}>
      <h2 style={{
        color: theme.colors.secondary,
        fontSize: "2rem",
        fontWeight: 700,
        marginBottom: 24,
        marginLeft: 24
      }}>
        Skittles Products
      </h2>
      <div style={{textAlign: "center", marginTop: "90px"}}>
        <span style={{fontSize: '1.25rem', color: "#ccc"}}>Product grid coming soon...</span>
      </div>
    </div>
  );
}

export default Products;
