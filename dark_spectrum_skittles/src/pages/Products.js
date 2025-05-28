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
        fontSize: "2rem",
        fontWeight: 700,
        marginBottom: 28,
        marginLeft: 6
      }}>
        Shop Clothing & Accessories
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "34px 28px",
        justifyContent: products.length < 3 ? "flex-start" : "center",
        minHeight: 180,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 42,
        maxWidth: "1440px"
      }}>
        {loading ? (
          <span style={{color: "#ccc", fontSize:"1.13rem"}}>Loading styles ...</span>
        ) : error ? (
          <span style={{color: "#e88787"}}>{error}</span>
        ) : (
          products.map(product => (
            <div
              key={product.id}
              className="card"
              style={{
                width: 330,
                minWidth: 220,
                maxWidth: 360,
                margin: "0 9px 24px 0",
                background: theme.colors.glass,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 9px 24px #8fe0bd29, 0 0 22px #8fe0bd14",
                border: "2px solid rgba(255,255,255,.13)",
                transition: "box-shadow 0.13s",
                fontSize: "1.15rem"
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
                    width: 170,
                    height: 170,
                    objectFit: "cover",
                    borderRadius: 38,
                    background: "#181c22",
                    boxShadow: "0 8px 27px #8fe0bd44"
                  }}
                  loading="lazy"
                />
              </div>
              <div style={{
                color: theme.colors.textPrimary,
                fontWeight: 700,
                marginTop: 14,
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "98%",
                fontSize: "1.19rem",
                whiteSpace: "nowrap"
              }}>
                <Link to={`/products/${product.id}`} style={{
                  color: "#fff",
                  textDecoration: "none",
                  textShadow: "0 2px 13px #222",
                  fontSize: "1.19rem",
                }}>{product.title}</Link>
              </div>
              <div style={{
                color: theme.colors.secondary,
                fontWeight: 600,
                margin: "10px 0",
                fontSize: "1.11rem",
              }}>
                ${product.price}
              </div>
              <button
                className="btn"
                style={{
                  marginTop: 10,
                  width: "94%",
                  borderRadius: 32,
                  fontSize: "1.04rem",
                  letterSpacing: ".01em",
                  background: `linear-gradient(90deg,${theme.colors.primary} 70%, ${theme.colors.accent})`,
                  boxShadow: "0 2px 16px #8fe0bd44"
                }}
                onClick={() => addToCart(product, 1)}
              >
                Add to Bag
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
