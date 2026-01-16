import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.map((p, i) => (
        <p key={i}>{p.name} – ₹{p.price}</p>
      ))}
      <h2>Total: ₹{total}</h2>
      <Link href="/checkout"><button>Checkout</button></Link>
    </div>
  );
}
