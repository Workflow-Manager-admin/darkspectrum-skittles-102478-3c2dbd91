import React from "react";
import theme from "../theme";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/products";

/**
 * PUBLIC_INTERFACE
 * Home landing page for Scribbles clothing & accessories store.
 * Hero, overview, visual, and a products preview grid - all rebranded for fashion.
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
        paddingTop: 82,
        paddingBottom: 10,
      }}
    >
      {/* Scribbles Hero */}
      <section
        className="taste-rainbow-hero"
        style={{
          width: "100%",
          margin: "0 auto 44px auto",
          padding: "0",
          minHeight: 420,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
            borderRadius: "2.6rem",
          }}
          aria-hidden="true"
        >
          {/* Animated/gradient BG w/ noise overlay & glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, #232a32 1%, #4da376 25%, #c7b9f6 50%, #416857 82%, #5479f2 100%)",
              backgroundSize: "200% 200%",
              filter: "blur(0.5px) brightness(1.05)",
              zIndex: 1,
              animation: "rainbowgradientmove 16s linear infinite alternate",
              opacity: 1,
              borderRadius: "2.6rem",
              boxShadow:
                "0 0 42px 0px #b4bef833, 0 8px 54px 14px #7e5cfd22, 0 0 88px 24px #31e88f33",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3,
              background: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 opacity=%220.12%22><filter id=%22n%22><feTurbulence baseFrequency=%220.99%22 numOctaves=%222%22 seed=%2242%22/></filter><rect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22/></svg>')",
              opacity: 0.12,
              borderRadius: "2.6rem",
              mixBlendMode: "soft-light"
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-8px",
              borderRadius: "2.8rem",
              zIndex: 2,
              filter: "blur(13px)",
              background:
                "conic-gradient(from 0deg, #eaebef 12%, #ded0ff 44%, #ffe1ee 77%, #eaebef 100%)",
              opacity: 0.22,
            }}
          />
          <style>
            {`
@keyframes rainbowgradientmove {
  0% {
    background-position: 0% 52%;
  }
  100% {
    background-position: 100% 48%;
  }
}
            `}
          </style>
        </div>
        <div
          className="glass hero-content"
          style={{
            position: "relative",
            zIndex: 4,
            background: "rgba(30,30,38,0.80)",
            minHeight: 330,
            width: "100%",
            maxWidth: 830,
            margin: "4px auto",
            padding: "46px 26px 40px 26px",
            borderRadius: "2.5rem",
            boxShadow:
              "0 12px 50px #3c2b5099, 0 0 44px #b9aef473, 0 0 44px #8fe0bd33, 0 8px 38px #a5bff944",
            border: "2.6px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(10.5px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            overflow: "visible",
            justifyContent: "center"
          }}
        >
          {/* Modern placeholder for clothing/fashion icon illustration */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 160,
              width: 190,
              padding: 0,
              marginRight: 0,
              marginLeft: 0,
            }}
          >
            {/* Fashion icon - you could swap this for an SVG asset for a shirt, dress, or accessories later */}
            <span
              role="img"
              aria-label="Trendy shirt icon"
              style={{ fontSize: 74, marginBottom: 7, color: "#eee" }}
            >
              👕
            </span>
            <span style={{
              fontWeight: 700,
              fontSize: '1.09rem',
              color: "#ededed",
              letterSpacing: ".07em"
            }}
            >Express Your Style</span>
          </div>
          {/* Main Text - Bold Headline */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 11,
              paddingLeft: 5,
              paddingRight: 5,
              minWidth: 220,
            }}
          >
            <h1
              style={{
                fontSize: "3.4rem",
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.08,
                letterSpacing: ".01em",
                background:
                  "linear-gradient(90deg, #aac9f6 0%, #bcefd8 20%, #fdc3ff 55%, #bdb0fe 80%, #e3efe7 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 3px 16px #676ec533)",
                textShadow: "0 3px 19px #bdb0fe33, 0 0 10px #bdb0fe17",
                fontFamily:
                  "'GT Walsheim Pro', 'Arial Rounded MT Bold', 'Inter', sans-serif",
                transition: "font-size 0.2s",
              }}
            >
              Wear What Moves You
            </h1>
            <div
              style={{
                color: "#ded0ff",
                fontWeight: 700,
                fontSize: "1.19rem",
                marginTop: 2,
                marginBottom: 6,
                letterSpacing: ".02em",
                textShadow: "0 2px 14px #e3efe799",
              }}
            >
              <span role="img" aria-label="sparkles">✨</span> Discover artful fashion for every personality
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "1.18rem",
                margin: "0px 0 12px 0",
                textShadow: "0 1.5px 14px #8fe0bd44",
                lineHeight: 1.39,
                fontWeight: 500,
                letterSpacing: '.011em',
                maxWidth: 410,
                opacity: 0.98,
              }}
            >
              Enter a world of endless creativity—Scribbles curates unique clothing and accessories designed to help you stand out and showcase your one-of-a-kind style.
            </p>
            <Link
              to="/products"
              tabIndex={0}
              style={{
                background:
                  "linear-gradient(93deg, #c3b1ea 30%, #8fe0bd 80%, #ffe1c6 96%)",
                color: "#232a39",
                fontWeight: 900,
                fontSize: "1.13rem",
                padding: "17px 38px",
                borderRadius: "1.7rem",
                textDecoration: "none",
                textShadow: "0 4px 20px #fff6, 0 4px 9px #e87a4118",
                boxShadow:
                  "0 2px 38px #c3b1ea24, 0 1.5px 10px #4da37611, 0 1px 13px #bdb0fe33",
                border: "2px solid #fff7",
                outline: 0,
                marginTop: "7px",
                letterSpacing: ".03em",
                filter: "drop-shadow(0 1.5px 40px #bdb0fe12)",
                cursor: "pointer",
                transition: "background 0.18s, color 0.15s",
                willChange: "background,color",
              }}
              onMouseOver={e =>
                (e.target.style.background =
                  "linear-gradient(90deg, #bdb0fe 35%, #ffe1c6 100%)")
              }
              onMouseOut={e =>
                (e.target.style.background =
                  "linear-gradient(93deg, #c3b1ea 30%, #8fe0bd 80%, #ffe1c6 96%)")
              }
            >
              <span role="img" aria-label="clothes">🛍️</span> Shop Scribbles
            </Link>
          </div>
        </div>
        {/* Right floating abstract flourishes or lines - omitted for minimal stylized brand */}
      </section>
      {/* Product preview grid/carousel */}
      <div
        style={{
          margin: "19px 0 0 0",
          width: "100%",
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
          Featured Styles
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px 26px",
            width: "96%",
            maxWidth: "1300px",
            margin: "0 auto",
            alignItems: "stretch",
            justifyItems: "center",
            padding: "10px 0",
          }}
        >
          {loading ? (
            <span style={{ color: "#eee", fontSize: "1.08rem" }}>
              Loading ...
            </span>
          ) : (
            products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="glassy-card compact-card"
                style={{
                  width: "100%",
                  maxWidth: 320,
                  minWidth: 0,
                  cursor: "pointer",
                  padding: "22px 14px 28px 14px",
                  background: theme.colors.glass,
                  borderRadius: "1.3rem",
                  transition: "box-shadow 0.13s",
                  boxShadow: "0 4px 16px #4da37633, 0 0 15px #8fe0bd20",
                  border: "1.5px solid rgba(255,255,255,0.13)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minHeight: 240,
                  margin: 0,
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
                    width: 132,
                    height: 132,
                    objectFit: "cover",
                    background: "#222",
                    borderRadius: 26,
                    marginBottom: 14,
                    boxShadow: "0 3px 18px #8fe0bd2e, 0 0 9px #8fe0bd24",
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    color: theme.colors.textPrimary,
                    fontWeight: 700,
                    marginTop: 8,
                    fontSize: "1.16rem",
                    textAlign: "center",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    hyphens: "auto",
                    lineHeight: 1.18,
                    minHeight: "2.1em",
                    maxHeight: "3.2em",
                    overflow: "hidden",
                    marginBottom: 5,
                    padding: "0 3px",
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
                    fontSize: "1.12rem",
                    marginTop: 6,
                    fontWeight: 600,
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
