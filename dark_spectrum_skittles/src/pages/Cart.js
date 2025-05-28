import React from "react";
import theme from "../theme";
import useCart from "../components/useCart";
import { Link, useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Shopping cart page: interactive and persists cart in local state.
 */
function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        padding: "38px 19px 33px 19px",
        maxWidth: 540,
        width: "100%",
        boxShadow: theme.colors.glowAccent,
        border: "1.5px solid rgba(255,255,255,0.10)",
        marginBottom: 12,
        minHeight: 160
      }}>
        <h3 style={{
          margin: 0,
          // color controlled by global heading rule
          fontWeight: 700,
          fontSize: "1.5rem",
          letterSpacing: ".01em"
        }}>
          Shopping Cart
        </h3>
        {cartItems.length === 0 ? (
          <div style={{ marginTop: 37, color: "#ccc", fontSize: "1.09rem" }}>
            Your cart is empty.
            <span> </span>
            <Link
              to="/products"
              style={{
                color: theme.colors.accent,
                textDecoration: "underline",
                fontWeight: 600,
              }}>Browse Skittles Products</Link>
          </div>
        ) : (
          <div>
            <div style={{ marginTop: 28, marginBottom: 16 }}>
              {cartItems.map(item => (
                <div key={item.id} className="glass" style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 17,
                  background: "rgba(23,25,35,.72)",
                  marginBottom: 14,
                  padding: "13px 9px",
                  boxShadow: "0 2px 10px #8fe0bd22"
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: 55,
                      height: 55,
                      objectFit: "cover",
                      borderRadius: 16,
                      background: "#181c22",
                      marginRight: 12
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: 600, color: theme.colors.textPrimary,
                      fontSize: ".98rem", marginBottom: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: 156
                    }}>
                      <Link to={`/products/${item.id}`} style={{
                        color: "#fff",
                        textDecoration: "none"
                      }}>{item.title}</Link>
                    </div>
                    <div style={{
                      color: theme.colors.textSecondary,
                      fontSize: ".96rem",
                      marginBottom: 2
                    }}>
                      ${item.price}
                    </div>
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    aria-label="Quantity"
                    style={{
                      width: 50,
                      padding: "2px 6px",
                      fontSize: ".97rem",
                      borderRadius: 6,
                      border: "1px solid #555",
                      marginRight: 5
                    }}
                    onChange={e =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                  />
                  <button
                    aria-label="Remove"
                    className="btn"
                    style={{
                      background: theme.colors.accent,
                      color: "#222",
                      fontSize: ".93rem",
                      padding: "7px 12px",
                      borderRadius: 13,
                      marginLeft: 5,
                      fontWeight: 800,
                      boxShadow: "0 2px 7px #8fe0bd44"
                    }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div style={{
              color: theme.colors.secondary,
              fontWeight: 600,
              fontSize: "1.13rem",
              textAlign: "right"
            }}>
              Total: ${cartTotal.toFixed(2)}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 13 }}>
              <button
                className="btn"
                style={{
                  background: theme.colors.primary,
                  color: "#fff",
                  fontSize: ".99rem",
                  borderRadius: 21,
                  padding: "9px 19px",
                  fontWeight: 600
                }}
                onClick={clearCart}
              >
                Empty Cart
              </button>
              <button
                className="btn"
                style={{
                  background: theme.colors.accent,
                  color: "#222",
                  fontWeight: 700,
                  borderRadius: 21,
                  fontSize: ".99rem",
                  padding: "9px 24px"
                }}
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
