import React from "react";
import { useParams } from "react-router-dom";
import theme from "../theme";

// PUBLIC_INTERFACE
/**
 * Placeholder for product detail page - will fetch single product from API using ID.
 */
function ProductDetail() {
  let { id } = useParams();
  // Will fetch and show product details using id
  return (
    <div className="page product-detail" style={{
      minHeight: "70vh",
      paddingTop: 120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.colors.textPrimary
    }}>
      <div style={{
        background: theme.colors.gradient,
        borderRadius: "1.2rem",
        padding: "48px",
        margin: "0 auto",
        maxWidth: 600,
        width: "100%",
        boxShadow: theme.colors.glowAccent,
        border: "1px solid rgba(255,255,255,.10)"
      }}>
        <h3 style={{margin: 0, color: theme.colors.accent, fontWeight: "bold", fontSize: "1.8rem"}}>
          Product Detail
        </h3>
        <p style={{marginTop: 25, fontSize: "1.05rem", color: theme.colors.textSecondary}}>
          Product (ID: <span style={{color: theme.colors.primary, fontWeight: 600}}>{id}</span>) info coming soon...
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
