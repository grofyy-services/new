import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:9080";
  const API_URL = `${API_BASE}/api/products`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Products</h1>

      {loading && <p>Loading...</p>}

      {!loading && products.length === 0 && <p>No products found.</p>}

      {!loading && products.length > 0 && (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <b>{p.name}</b> — ${Number(p.price).toFixed(2)}
              {p.description ? ` (${p.description})` : ""}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;