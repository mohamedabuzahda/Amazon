import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  // Removed useNavigate, using Link instead

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleQtyChange = (id, delta) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, (item.qty || 1) + delta);
        return { ...item, qty: newQty };
      }
      return item;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!cart.length) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        Your cart is empty.
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px #eee",
        padding: 24,
      }}
    >
      <h2 style={{ fontWeight: 600, fontSize: 28, marginBottom: 24 }}>
        Your Cart
      </h2>
      <div>
        {cart.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f7f7f7",
              borderRadius: 8,
              padding: 12,
              marginBottom: 16,
            }}
          >
            <img
              src={item.image}
              alt={item.name || item.title}
              style={{
                width: 70,
                height: 70,
                objectFit: "contain",
                borderRadius: 8,
                background: "#fff",
                marginRight: 16,
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 18 }}>
                {item.name || item.title || `Product ${i + 1}`}
              </div>
              <div style={{ color: "#888", margin: "6px 0" }}>
                {item.price && <span>Price: ${item.price}</span>}
                {item.currentPrice && <span>Price: ${item.currentPrice}</span>}
                <span style={{ marginLeft: 12, fontWeight: 500 }}>
                  Total: $
                  {(
                    (item.price || item.currentPrice || 0) * (item.qty || 1)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => handleQtyChange(item.id, -1)}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                    background: "#fff",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    minWidth: 28,
                    display: "inline-block",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {item.qty || 1}
                </span>
                <button
                  onClick={() => handleQtyChange(item.id, 1)}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                    background: "#fff",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "5px 12px",
                  cursor: "pointer",
                  marginTop: 8,
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "right",
          marginTop: 24,
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        Grand Total: $
        {cart
          .reduce(
            (sum, item) =>
              sum + (item.price || item.currentPrice || 0) * (item.qty || 1),
            0
          )
          .toFixed(2)}
      </div>
      <div style={{ textAlign: "right", marginTop: 16 }}>
        <Link
          to="/order"
          style={{
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 32px",
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            marginTop: 8,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Pay Now
        </Link>
      </div>
    </div>
  );
};

export default Cart;
