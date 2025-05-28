import React from "react";
import theme from "../theme";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/products";

/**
 * PUBLIC_INTERFACE
 * Home landing page for DarkSpectrum Skittles.
 * Hero, overview, gradient visuals, and a products preview carousel/grid.
 */
function Home() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchProducts()
      .then(list => {
        if (alive) setProducts(list.slice(0, 8)); // Show up to 8 preview products
      })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, []);

  return (
    <div className="page home" style={{ minHeight: "70vh", paddingTop: 120 }}>
      {/* Hero section */}
      <div
        className="hero"
        style={{
          padding: 0,
          margin: 0,
          minHeight: 320,
          flexDirection: "column",
        }}
      >
        <div
          className="glass"
          style={{
            background: theme.colors.gradient,
            borderRadius: "1.6rem",
            boxShadow: theme.colors.glowAccent,
            padding: "44px 30px",
            maxWidth: "550px",
            margin: "0 auto",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            border: "1.5px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(8px)",
          }}>
          <h1 style={{
            color: theme.colors.accent,
            fontSize: "2.8rem",
            fontWeight: 800,
            margin: 0,
            letterSpacing: ".01em",
            textShadow: "0 2px 24px #8fe0bd33"
          }}>Taste The <span style={{color: "#fff"}}>Rainbow</span></h1>
          <div className="subtitle" style={{
            color: theme.colors.secondary,
            fontWeight: 600,
            marginTop: 0,
            marginBottom: 12,
            fontSize: "1.23rem"
          }}>
            Skittles Product Showcase
          </div>
          <p style={{
            color: theme.colors.textSecondary,
            fontSize: "1.16rem",
            margin: "5px 0 18px 0",
            textAlign: "center"
          }}>
            Explore a vibrant variety of Skittles. Dive into unique flavors, bold styles, and a delicious modern dark UI. Your candy adventure starts here!
          </p>
          <Link
            to="/products"
            style={{
              background: theme.colors.primary,
              color: "#fff",
              fontSize: "1.09rem",
              padding: "12px 30px",
              borderRadius: "1.8rem",
              textDecoration: "none",
              boxShadow: "0 4px 25px #4da37655",
              marginTop: "10px",
              transition: "background 0.16s"
            }}
          >
            Browse All Products
          </Link>
        </div>
      </div>
      {/* Product preview grid/carousel */}
      <div style={{
        margin: "54px auto 0 auto",
        width: "100%",
        maxWidth: 900,
      }}>
        <h3 style={{
          color: theme.colors.accent,
          fontWeight: 600,
          marginLeft: "10px",
          fontSize: "1.4rem",
          marginBottom: "17px"
        }}>
          Featured Skittles Products
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px 22px",
            justifyContent: products.length < 5 ? "flex-start" : "center",
            width: "100%"
          }}
        >
          {loading ? (
            <span style={{ color: "#eee", fontSize: "1.05rem" }}>Loading ...</span>
          ) : products.length === 0 ? (
            <span style={{ color: "#aaa" }}>No products found.</span>
          ) : (
            products.slice(0, 5).map(product => (
              <div
                key={product.id}
                className="glassy-card"
                style={{
                  width: 180,
                  cursor: "pointer",
                  padding: 20,
                  background: theme.colors.glass,
                  borderRadius: "1.1rem",
                  transition: "box-shadow 0.13s",
                  boxShadow: "0 3px 18px #4da37655, 0 0 16px #8fe0bd44",
                  border: "1.2px solid rgba(255,255,255,0.11)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => navigate(`/products/${product.id}`)}
                tabIndex={0}
                aria-label={`View details for ${product.title}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                  style={{
                    width: 110,
                    height: 110,
                    objectFit: "cover",
                    background: "#222",
                    borderRadius: 28,
                    marginBottom: 8,
                    boxShadow: "0 6px 15px #8fe0bd26, 0 0 9px #8fe0bd44"
                  }}
                  loading="lazy"
                />
                <div style={{
                  color: theme.colors.textPrimary,
                  fontWeight: 600,
                  marginTop: 2,
                  fontSize: "1.07rem",
                  textAlign: "center",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}>
                  {product.title}
                </div>
                <div
                  style={{
                    color: theme.colors.secondary,
                    fontSize: ".97rem",
                    marginTop: 4,
                    fontWeight: 500,
                  }}
                >
                  ${product.price}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
