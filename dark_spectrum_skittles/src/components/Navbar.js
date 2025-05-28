import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import ScribblesLogo from "../assets/ScribblesLogo.svg";

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
          {/* Fashion logo: SVG, not emoji */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              padding: 0,
              marginRight: 3,
              borderRadius: "50%",
              boxShadow: "0 0 18px 3px #232928dd, 0 2px 18px #E87A4142, 0 0 30px #4da37631",
              background: "rgba(20,22,40,0.13)",
              height: 43,
              width: 134,
              overflow: "visible"
            }}
          >
            <img
              src={ScribblesLogo}
              alt="Scribbles Logo"
              height={43}
              width={134}
              style={{
                display: "block",
                height: 43,
                width: 134,
                minWidth: 103,
                minHeight: 34,
                objectFit: "contain",
                filter: "drop-shadow(0 2px 12px #8fe0bd55)"
              }}
              loading="eager"
            />
          </span>
          {/* (optional: might skip wordmark if already in SVG, so below span can be kept for accessibility or for external logo text) */}
          <span
            style={{
              color: theme.colors.textPrimary,
              letterSpacing: "0.09em",
              fontWeight: 900,
              textShadow: "0 3px 18px #8fe0bd22, 0 2px 14px #4da37633",
              fontSize: "1.45rem",
              display: "inline",
              transform: "translateY(2px)",
              marginLeft: 0,
              // Hide wordmark if SVG already displays it
              position: "absolute",
              left: "-10000px"
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
