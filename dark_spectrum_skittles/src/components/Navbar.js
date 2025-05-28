import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
// Placeholder for a Scribbles Logo - you can replace '🖌️' with an SVG if you add one
// PUBLIC_INTERFACE
/**
 * Renders the navigation bar for the Scribbles fashion app.
 */
function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        background: theme.colors.glass,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
        boxShadow: theme.colors.glowAccent,
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "0 32px",
        width: "100%"
      }}>
        <Link
          to="/"
          className="logo"
          style={{
            fontSize: "1.48rem",
            fontWeight: 800,
            color: theme.colors.accent,
            textDecoration: "none",
            letterSpacing: "0.07em",
            display: "flex",
            alignItems: "center",
            gap: 14,
            filter: "drop-shadow(0 4px 16px #8fe0bd66)",
            padding: "0 2px"
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0",
              marginRight: 3,
              borderRadius: "50%",
              boxShadow: "0 0 18px 3px #232928dd, 0 2px 18px #E87A4142, 0 0 30px #4da37631",
              background: "rgba(20,22,40,0.16)"
            }}
          >
            {/* Modern scribbled paint brush or clothing hanger icon. Replace '🖌️' with image for production. */}
            <span role="img" aria-label="Scribbles logo" style={{fontSize: 32}}>🖌️</span>
          </span>
          <span
            style={{
              color: theme.colors.textPrimary,
              letterSpacing: "0.09em",
              fontWeight: 900,
              textShadow: "0 3px 18px #8fe0bd22, 0 2px 14px #4da37633",
              fontSize: "1.5rem",
              display: "inline",
              transform: "translateY(2px)"
            }}
          >
            Scribbles
          </span>
        </Link>
        <div>
          <Link to="/" className="navlink" style={navLinkStyle}>
            Home
          </Link>
          <Link to="/products" className="navlink" style={navLinkStyle}>
            Shop
          </Link>
          <Link to="/cart" className="navlink" style={{...navLinkStyle, marginRight:0}}>
            My Bag
          </Link>
        </div>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: "#fff",
  fontWeight: 500,
  marginRight: 32,
  textDecoration: "none",
  fontSize: "1.09rem",
  padding: "8px 15px",
  borderRadius: "8px",
  transition: "background 0.15s",
  boxShadow: "none"
};

export default Navbar;
