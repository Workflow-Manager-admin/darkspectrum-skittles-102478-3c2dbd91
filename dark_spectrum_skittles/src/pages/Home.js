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
      .catch(() => { if (alive) setProducts([]); })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, []);

  return (
    <div className="page home" style={{ minHeight: "70vh", paddingTop: 100 }}>
      {/* Hero section */}
      <div
        className="hero"
        style={{
          padding: 0,
          margin: 0,
          minHeight: 240,
          flexDirection: "column",
          gap: "14px"
        }}
      >
        <div
          className="glass"
          style={{
            background: theme.colors.gradient,
            borderRadius: "1.2rem",
            boxShadow: theme.colors.glowAccent,
            padding: "32px 18px",
            maxWidth: "440px",
            margin: "0 auto",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 11,
            border: "1.1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(7px)",
          }}>
          <h1 style={{
            // color is now handled globally via CSS for headings
            fontSize: "2.25rem",
            fontWeight: 800,
            margin: 0,
            letterSpacing: ".01em",
            textShadow: "0 2px 14px #8fe0bd33"
          }}>Taste The <span style={{color: "#fff"}}>Rainbow</span></h1>
          <div className="subtitle" style={{
            color: theme.colors.secondary,
            fontWeight: 600,
            marginTop: 0,
            marginBottom: 7,
            fontSize: "1.11rem",
            letterSpacing: "0.01em"
          }}>
            Skittles Product Showcase
          </div>
          <p style={{
            color: theme.colors.textSecondary,
            fontSize: "1rem",
            margin: "0px 0 9px 0",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "330px"
          }}>
            Explore a vibrant variety of Skittles. Dive into unique flavors, bold styles, and a delicious modern dark UI. Your candy adventure starts here!
          </p>
          <Link
            to="/products"
            style={{
              background: theme.colors.primary,
              color: "#fff",
              fontSize: "1.01rem",
              padding: "8px 20px",
              borderRadius: "1.3rem",
              textDecoration: "none",
              boxShadow: "0 2px 16px #4da37644",
              marginTop: "6px",
              transition: "background 0.16s"
            }}
          >
            Browse All Products
          </Link>
        </div>
      </div>
      {/* Product preview grid/carousel */}
      <div style={{
        margin: "32px auto 0 auto",
        width: "100%",
        maxWidth: 850,
      }}>
        <h3 style={{
          // color is now inherited as white from global CSS heading rule
          fontWeight: 600,
          marginLeft: "4px",
          fontSize: "1.14rem",
          marginBottom: "11px"
        }}>
          Featured Skittles Products
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "18px 13px",
            justifyContent: products.length < 5 ? "flex-start" : "center",
            width: "100%"
          }}
        >
          {loading ? (
            <span style={{ color: "#eee", fontSize: "1.01rem" }}>Loading ...</span>
          ) : (
            products.slice(0, 5).map(product => (
              <div
                key={product.id}
                className="glassy-card"
                style={{
                  width: 152,
                  cursor: "pointer",
                  padding: 13,
                  background: theme.colors.glass,
                  borderRadius: "1rem",
                  transition: "box-shadow 0.13s",
                  boxShadow: "0 3px 12px #4da37644, 0 0 10px #8fe0bd33",
                  border: "1.1px solid rgba(255,255,255,0.10)",
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
                    width: 90,
                    height: 90,
                    objectFit: "cover",
                    background: "#222",
                    borderRadius: 20,
                    marginBottom: 5,
                    boxShadow: "0 4px 12px #8fe0bd1e, 0 0 7px #8fe0bd29"
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    color: theme.colors.textPrimary,
                    fontWeight: 600,
                    marginTop: 2,
                    fontSize: ".99rem",
                    textAlign: "center",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    hyphens: "auto",
                    lineHeight: 1.18,
                    minHeight: "2.1em",
                    maxHeight: "3.2em",
                    overflow: "hidden",
                    marginBottom: 1,
                    padding: "0 2px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    whiteSpace: "normal"
                  }}
                  title={product.title}
                >
                  {product.title}
                </div>
                <div
                  style={{
                    color: theme.colors.secondary,
                    fontSize: ".92rem",
                    marginTop: 3,
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
