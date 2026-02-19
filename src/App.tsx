import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  const [page, setPage] = useState<"home" | "cart" | "checkout">("home");

  return (
    <div>
      {/* NAVBAR PLACEHOLDER */}
      <div style={{ padding: 20, borderBottom: "1px solid gray" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("cart")}>Cart</button>
        <button onClick={() => setPage("checkout")}>Checkout</button>
      </div>

      <div>
        {page === "home" && <Home />}
        {page === "cart" && <Cart />}
        {page === "checkout" && <Checkout />}
      </div>
    </div>
  );
}
