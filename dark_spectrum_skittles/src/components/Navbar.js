import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import SkittlesLogo from "../assets/SkittlesLogo.svg";

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
        <Link to="/" className="logo" style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: theme.colors.accent,
          textDecoration: "none",
          letterSpacing: "0.07em",
          display: "flex", alignItems: "center", gap: 11,
          filter: "drop-shadow(0 2px 8px #8fe0bd44)"
        }}>
          <img
            src={SkittlesLogo}
            alt="Skittles/ColorCraft Logo"
            style={{
              height: 32,
              width: "auto",
              marginRight: 2,
              verticalAlign: "middle",
              filter: "drop-shadow(0 2px 7px #E87A4188)"
            }}
            draggable={false}
            aria-hidden="true"
            className="logo-svg"
          />
          <span style={{color: theme.colors.textPrimary, letterSpacing: "0.08em"}}>
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
