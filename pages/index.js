import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="container">
      <h1>ToxicLabs – Official Store</h1>
      <div className="grid">
        {products.map(p => (
          <Link key={p.id} href={`/product/${p.id}`}>
            <div className="card">
              <img src={p.image} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button>Buy</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
