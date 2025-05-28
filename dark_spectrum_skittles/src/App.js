import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import theme from "./theme";

/**
 * PUBLIC_INTERFACE
 * Main container for the DarkSpectrum Skittles app, with theming/layout/pages.
 */
function App() {
  // Setup global shiny gradient background (body or app level)
  React.useEffect(() => {
    document.body.style.background = theme.colors.gradient;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.minHeight = "100vh";
    document.body.style.transition = "background 0.5s";
    document.body.style.fontFamily = `'Inter','Roboto','Helvetica','Arial',sans-serif`;
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <Router>
      <div className="app" style={{
        // Glassmorphism for app background
        minHeight: "100vh",
        background: "rgba(0,0,0,0.22)",
        position: "relative",
        paddingTop: 68 // to offset the fixed navbar (smaller)
      }}>
        <Navbar />
        <div
          style={{
            width: "100%",
            maxWidth: "none", // Remove maxWidth constraint
            margin: 0, // Remove auto margin to allow full width
            padding: "0 10px",
            boxSizing: "border-box"
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;