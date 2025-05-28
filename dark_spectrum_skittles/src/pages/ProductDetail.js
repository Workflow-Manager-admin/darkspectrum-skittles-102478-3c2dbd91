import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import theme from "../theme";
import { fetchProductById } from "../api/products";
import useCart from "../components/useCart";

/**
 * PUBLIC_INTERFACE
 * Product Detail page: fetches by ID, displays image, info, and allows adding to cart.
 */
function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchProductById(id)
      .then(prod => { if (alive) setProduct(prod); })
      .catch(() => setError("Could not load product."))
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; }
  }, [id]);

  if (loading) {
    return (
      <div className="page" style={{ minHeight: "60vh", paddingTop: 120, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ color: "#eee" }}>Loading product...</span>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="page" style={{ minHeight: "60vh", paddingTop: 120, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ color: "#e77979" }}>{error || "Product not found."}</span>
      </div>
    );
  }

  return (
    <div className="page product-detail" style={{
      minHeight: "70vh",
      paddingTop: 120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.colors.textPrimary,
    }}>
      <div style={{
        background: theme.colors.gradient,
        borderRadius: "1.3rem",
        padding: "48px 34px 34px 34px",
        margin: "0 auto",
        maxWidth: 520,
        minWidth: 280,
        width: "100%",
        boxShadow: theme.colors.glowAccent,
        border: "1.5px solid rgba(255,255,255,.10)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
        position: "relative",
        backdropFilter: "blur(6px)"
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            left: 18, top: 20,
            fontSize: "1.15rem",
            background: "transparent",
            color: theme.colors.accent,
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
            textShadow: "0 2px 11px #8fe0bd33"
          }}
          aria-label="Back"
        >
          ← Back
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="product-img"
          style={{
            width: 165,
            height: 165,
            objectFit: "cover",
            borderRadius: "2.1rem",
            background: "#111c",
            boxShadow: "0 9px 40px #8fe0bd44, 0 0 13px #4da37611"
          }}
          loading="lazy"
        />
        <div style={{
          // color handled by global CSS if this is a heading; for structure improvement, make this a heading
          fontWeight: 700,
          fontSize: "1.4rem",
          marginTop: 2,
          textAlign: "center"
        }}>{product.title}</div>
        <div style={{
          color: theme.colors.textSecondary,
          fontWeight: 400,
          fontSize: "1.06rem",
          textAlign: "center",
          margin: "6px 0 8px 0"
        }}>
          {product.description}
        </div>
        <div style={{
          color: theme.colors.secondary,
          fontWeight: 700,
          fontSize: "1.13rem",
          margin: "7px 0"
        }}>
          ${product.price}
        </div>
        <button
          className="btn"
          style={{
            width: "95%",
            fontSize: "1.06rem",
            borderRadius: 22,
            background: `linear-gradient(90deg,${theme.colors.primary} 80%, ${theme.colors.accent})`,
            marginTop: 4
          }}
          onClick={() => addToCart(product, 1)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
