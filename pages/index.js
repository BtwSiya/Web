import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="container">

      {/* ===== HERO SECTION ===== */}
      <div style={{ marginBottom: "40px" }}>
        <h1>Official ToxicLabs Store</h1>
        <p style={{ color: "#aaa", marginTop: "6px" }}>
          Premium Streetwear · Dark · Unfiltered
        </p>
      </div>

      {/* ===== PRODUCTS GRID ===== */}
      <div className="grid">
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`}>
            <div className="card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button>Buy Now</button>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
          }
