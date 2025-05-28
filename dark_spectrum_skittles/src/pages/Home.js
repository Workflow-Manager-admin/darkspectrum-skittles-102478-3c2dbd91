import React from "react";
import theme from "../theme";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * Home landing page for DarkSpectrum Skittles
 */
function Home() {
  return (
    <div className="page home" style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 120,
    }}>
      <div style={{
        background: theme.colors.gradient,
        borderRadius: "1.5rem",
        boxShadow: theme.colors.glowAccent,
        padding: "48px 30px 40px 30px",
        maxWidth: "530px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
        border: "1.5px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(8px)",
      }}>
        <h1 style={{
          color: theme.colors.accent,
          fontSize: "2.6rem",
          fontWeight: "bold",
          margin: 0,
          textShadow: "0 2px 24px #8fe0bd33"
        }}>Welcome to <span style={{color: "#fff"}}>DarkSpectrum Skittles</span></h1>
        <p style={{
          color: theme.colors.textSecondary,
          fontSize: "1.16rem",
          margin: "18px 0",
          textAlign: "center"
        }}>
          Discover a rainbow of delicious Skittles. Explore vibrant flavors and unique product variations—all in a sleek, glassy dark theme.
        </p>
        <Link to="/products" style={{
          background: theme.colors.primary,
          color: "#fff",
          fontSize: "1.07rem",
          padding: "10px 28px",
          borderRadius: "1.8rem",
          textDecoration: "none",
          boxShadow: "0 4px 25px #4da37655",
          marginTop: "4px",
          transition: "background 0.16s"
        }}>Browse Products</Link>
      </div>
    </div>
  );
}

export default Home;
