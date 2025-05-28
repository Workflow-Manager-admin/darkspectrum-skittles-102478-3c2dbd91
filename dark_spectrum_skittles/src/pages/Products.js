import React from "react";
import theme from "../theme";
import { fetchProducts } from "../api/products";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../components/useCart";

/**
 * PUBLIC_INTERFACE
 * Product list page: fetches from API and displays a glassy grid of interactive, glowing cards.
 */
function Products() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProducts()
      .then(d => { if (mounted) setProducts(d); })
      .catch(() => { if (mounted) setProducts([]); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; }
  }, []);

  return (
    <div className="page products" style={{
      minHeight: "70vh",
      paddingTop: 120,
      color: theme.colors.textPrimary,
    }}>
      <h2 style={{
        color: theme.colors.secondary,
        fontSize: "2rem",
        fontWeight: 700,
        marginBottom: 28,
        marginLeft: 6
      }}>
        Skittles Products
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "26px 23px",
        justifyContent: products.length < 3 ? "flex-start" : "center",
        minHeight: 180,
        marginBottom: 33
      }}>
        {loading ? (
          <span style={{color: "#ccc"}}>Loading products ...</span>
        ) : error ? (
          <span style={{color: "#e88787"}}>{error}</span>
        ) : (
          products.map(product => (
            <div
              key={product.id}
              className="card"
              style={{
                width: 240,
                margin: "0 5px 15px 0",
                background: theme.colors.glass,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 6px 24px #8fe0bd22, 0 0 14px #8fe0bd11",
                border: "1.5px solid rgba(255,255,255,.11)",
                transition: "box-shadow 0.13s",
              }}
              tabIndex={0}
              aria-label={`View ${product.title}`}
            >
              <div style={{width: "100%"}} onClick={() => navigate(`/products/${product.id}`)}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 30,
                    background: "#181c22",
                    boxShadow: "0 6px 25px #8fe0bd33"
                  }}
                  loading="lazy"
                />
              </div>
              <div style={{
                color: theme.colors.textPrimary,
                fontWeight: 600,
                marginTop: 8,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "98%"
              }}>
                <Link to={`/products/${product.id}`} style={{
                  color: "#fff",
                  textDecoration: "none",
                  textShadow: "0 1px 6px #222",
                  fontSize: "1.06rem",
                }}>{product.title}</Link>
              </div>
              <div style={{
                color: theme.colors.secondary,
                fontWeight: 500,
                margin: "8px 0",
                fontSize: "1.07rem",
              }}>
                ${product.price}
              </div>
              <button
                className="btn"
                style={{
                  marginTop: 6,
                  width: "88%",
                  borderRadius: 25,
                  fontSize: ".98rem",
                  letterSpacing: ".01em",
                  background: `linear-gradient(90deg,${theme.colors.primary} 70%, ${theme.colors.accent})`,
                  boxShadow: "0 2px 15px #8fe0bd44"
                }}
                onClick={() => addToCart(product, 1)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
