export default function Checkout() {
  const payRazorpay = async () => {
    const res = await fetch("/api/razorpay", { method: "POST" });
    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: "ToxicLabs",
      handler: () => {
        window.location.href = "/success";
      }
    };
    new window.Razorpay(options).open();
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <button onClick={payRazorpay}>Pay with UPI / Card</button>
      <button onClick={() => location.href="/success"}>Cash on Delivery</button>
    </div>
  );
}
