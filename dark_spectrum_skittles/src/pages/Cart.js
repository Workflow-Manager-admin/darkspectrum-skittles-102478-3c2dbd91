import React from "react";
import theme from "../theme";

// PUBLIC_INTERFACE
/**
 * Placeholder for the shopping cart page.
 */
function Cart() {
  return (
    <div className="page cart" style={{
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
        padding: "46px",
        maxWidth: 540,
        width: "100%",
        boxShadow: theme.colors.glowAccent,
        border: "1px solid rgba(255,255,255,0.09)"
      }}>
        <h3 style={{margin: 0, color: theme.colors.secondary, fontWeight: 700, fontSize: "1.5rem"}}>
          Shopping Cart
        </h3>
        <p style={{marginTop: 28, fontSize: "1.08rem", color: theme.colors.textSecondary}}>
          The cart will be here. Add, remove, and review Skittles before checkout!
        </p>
      </div>
    </div>
  );
}

export default Cart;
