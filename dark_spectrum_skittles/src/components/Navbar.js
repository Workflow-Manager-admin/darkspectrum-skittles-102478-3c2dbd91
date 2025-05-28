import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import SkittlesLogo from "../assets/SkittlesLogo.svg"; // Updated asset
// PUBLIC_INTERFACE
/**
 * Renders the navigation bar for the DarkSpectrum Skittles app.
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
            <img
              src={SkittlesLogo}
              alt="Skittles/ColorCraft Logo"
              style={{
                height: 38,
                width: 38,
                minWidth: 38,
                aspectRatio: "1/1",
                verticalAlign: "middle",
                filter:
                  "drop-shadow(0 2px 12px #E87A4170) drop-shadow(0 0px 9px #8fe0bd41)",
                background: "transparent",
                borderRadius: "50%",
                boxShadow: "0 0 18px 2px #8fe0bd33"
              }}
              draggable={false}
              aria-hidden="true"
              className="logo-svg"
            />
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
            DarkSpectrum Skittles
          </span>
        </Link>
        <div>
          <Link to="/" className="navlink" style={navLinkStyle}>
            Home
          </Link>
          <Link to="/products" className="navlink" style={navLinkStyle}>
            Products
          </Link>
          <Link to="/cart" className="navlink" style={{...navLinkStyle, marginRight:0}}>
            Cart
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
