import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="ToxicLabs" className="logo" />
        <span className="brand">ToxicLabs</span>
      </div>

      <div className="nav-right">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
