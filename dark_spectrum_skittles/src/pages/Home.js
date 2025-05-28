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
    <div
      className="page home"
      style={{
        minHeight: "70vh",
        paddingTop: 82, // less vertical space at top
        paddingBottom: 10,
      }}
    >
      {/* Hero section */}
      <div
        className="hero"
        style={{
          padding: 0,
          margin: 0,
          minHeight: 170,
          flexDirection: "column",
          gap: "9px",
        }}
      >
        <div
          className="glass"
          style={{
            background: theme.colors.gradient,
            borderRadius: "1.1rem",
            boxShadow: theme.colors.glowAccent,
            padding: "22px 9px", // more compact
            maxWidth: "390px",
            margin: "0 auto",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 7,
            border: "1.1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(7px)",
          }}
        >
          <h1
            style={{
              fontSize: "2.05rem",
              fontWeight: 800,
              margin: 0,
              letterSpacing: ".01em",
              textShadow: "0 2px 14px #8fe0bd33",
            }}
          >
            Taste The <span style={{ color: "#fff" }}>Rainbow</span>
          </h1>
          <div
            className="subtitle"
            style={{
              color: theme.colors.secondary,
              fontWeight: 600,
              marginTop: 0,
              marginBottom: 5,
              fontSize: "1.05rem",
              letterSpacing: "0.01em",
            }}
          >
            Skittles Product Showcase
          </div>
          <p
            style={{
              color: theme.colors.textSecondary,
              fontSize: ".98rem",
              margin: "0px 0 7px 0",
              textAlign: "center",
              lineHeight: 1.35,
              maxWidth: "290px",
            }}
          >
            Explore a vibrant variety of Skittles. Dive into unique flavors, bold styles, and a delicious modern dark UI. Your candy adventure starts here!
          </p>
          <Link
            to="/products"
            style={{
              background: theme.colors.primary,
              color: "#fff",
              fontSize: ".97rem",
              padding: "7px 16px",
              borderRadius: "1.15rem",
              textDecoration: "none",
              boxShadow: "0 1px 11px #4da37644",
              marginTop: "5px",
              transition: "background 0.16s",
            }}
          >
            Browse All Products
          </Link>
        </div>
      </div>
      {/* Product preview grid/carousel */}
      <div
        style={{
          margin: "19px auto 0 auto",
          width: "100%",
          maxWidth: 820,
        }}
      >
        <h3
          style={{
            fontWeight: 600,
            marginLeft: "3px",
            fontSize: "1.06rem",
            marginBottom: "6px",
          }}
        >
          Featured Skittles Products
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 7px",
            justifyContent: products.length < 5 ? "flex-start" : "center",
            width: "100%",
          }}
        >
          {loading ? (
            <span style={{ color: "#eee", fontSize: ".98rem" }}>
              Loading ...
            </span>
          ) : (
            products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="glassy-card compact-card"
                style={{
                  width: 132,
                  cursor: "pointer",
                  padding: "7px 7px 13px 7px",
                  background: theme.colors.glass,
                  borderRadius: "0.95rem",
                  transition: "box-shadow 0.13s",
                  boxShadow: "0 2px 8px #4da37633, 0 0 7px #8fe0bd23",
                  border: "1.1px solid rgba(255,255,255,0.10)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 170,
                  margin: "0 0 3px 0",
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
                    width: 74,
                    height: 74,
                    objectFit: "cover",
                    background: "#222",
                    borderRadius: 16,
                    marginBottom: 4,
                    boxShadow: "0 3px 10px #8fe0bd1e, 0 0 7px #8fe0bd19",
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    color: theme.colors.textPrimary,
                    fontWeight: 600,
                    marginTop: 2,
                    fontSize: ".92rem",
                    textAlign: "center",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    hyphens: "auto",
                    lineHeight: 1.14,
                    minHeight: "2.1em",
                    maxHeight: "2.8em",
                    overflow: "hidden",
                    marginBottom: 1,
                    padding: "0 1px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    whiteSpace: "normal",
                  }}
                  title={product.title}
                >
                  {product.title}
                </div>
                <div
                  style={{
                    color: theme.colors.secondary,
                    fontSize: ".87rem",
                    marginTop: 2,
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
