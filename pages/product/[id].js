import { useRouter } from "next/router";
import { products } from "../../data/products";

export default function Product() {
  const { query } = useRouter();
  const product = products.find(p => p.id == query.id);
  if (!product) return null;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div className="container">
      <img src={product.image} />
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
