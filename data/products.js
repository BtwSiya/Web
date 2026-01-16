export const products = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name: `ToxicLabs Street Tee ${i + 1}`,
  price: 999 + i * 50,
  image: "https://via.placeholder.com/400x400?text=ToxicLabs",
}));
